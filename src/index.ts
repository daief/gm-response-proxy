import './proxy/xhr';

// import(/* webpackChunkName: 'setting-panel' */ './SettingPanel');

GM_log(GM_getValue('name'));

GM_setValue('name', 111);
