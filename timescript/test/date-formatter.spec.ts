// ./src/date-formatter.spec.ts


import {it,test,describe,expect} from 'vitest';
import {formatDate} from '../src/date-formatter';

describe('date-formatter',()=> {

    describe('formatDate() ',()=>{
        test('Custom format string',()=>{
            expect(formatDate("MMM-D-YYYY", new Date("2026-04-02"))).toEqual("Apr-2-2026");
        });
        test.skip('Throw on wrong format string',()=> {
            expect(()=> formatDate("MMM.D.YYYY", new Date())).toThrow("Invalid format string. Use YY, YYYY, MMM, MM, DD, D seperated by '-'");
        });
    });
    
    describe('another func() ',()=>{
        it('Should test stub code',()=> {
            
        });
    });

})