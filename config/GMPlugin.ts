import { Compilation, Compiler } from 'webpack';
import { ConcatSource } from 'webpack-sources';

const NAME = 'GMPlugin';

function insertSpace(str: string) {
  return ' '.repeat(8 * 3 - str.length);
}

/**
 * 插入头部油猴脚本配置注释
 */
export class GMPlugin {
  private gmConfigText: string;

  scriptConfig: Array<[string, string | number]>;

  constructor(opts: { scriptConfig?: Array<[string, string | number]> }) {
    this.scriptConfig = opts.scriptConfig || [];

    this.gmConfigText = [
      '// ==UserScript==',
      ...this.scriptConfig.map(
        ([name, value]) => `// @${name}${insertSpace(name)}${value}`
      ),
      '// ==/UserScript==',
    ].join('\n');
  }

  apply(compiler: Compiler) {
    compiler.hooks.compilation.tap(NAME, compilation => {
      // after process, after optimization
      compilation.hooks.afterProcessAssets.tap(
        {
          name: NAME,
          // stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
          stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS,
        },
        () => {
          for (const chunk of compilation.chunks) {
            // entryOnly
            if (!chunk.canBeInitial()) {
              continue;
            }

            for (const file of chunk.files) {
              const data = {
                chunk,
                filename: file,
              };

              const comment = compilation.getPath(this.gmConfigText, data);

              compilation.updateAsset(
                file,
                // @ts-ignore
                old => new ConcatSource(comment, '\n', old)
              );
            }
          }
        }
      );
    });
  }
}
