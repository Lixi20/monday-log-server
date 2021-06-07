import { SundayLog } from './SundayLog.js'

window.test = test

function test() {
    let sun = new SundayLog('http://127.0.0.1:8080/add_log', 'UTF-8', 'foo.com/info');

    sun.beginCheckpoint('log test case');
    sun.variable('变量1', '值1');
    sun.input('var2', 'value2');
    sun.output('var3', 'value3');
    sun.error('error message');
    sun.warn('warn message');
    sun.info('info message');
    sun.debug('debug message');
    sun.trace('trace message');
    sun.endCheckpoint('log test case');
}
