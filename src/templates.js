export { 
    generatePackageJson, 
    generateDevvitJson, 
    generateClientViteConfig, 
    generateServerViteConfig, 
    tsConfig 
} from './templates/config.js';

export { getMainTs } from './templates/app.js';

export { 
    simpleLoggerJs, 
    webAudioPolyfill, 
    websimSocketPolyfill, 
    websimStubsJs, 
    jsxDevProxy, 
    websimPackageJs, 
    avatarInjector 
} from './templates/polyfills/index.js';

export { validateScript, setupScript } from './templates/scripts.js';

export { generateReadme } from './templates/docs.js';

