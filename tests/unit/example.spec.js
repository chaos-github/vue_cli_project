// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'
// import test from '@print.js';

function printStr(input){
  let loop = input;
  let output = '';
  for(let idx=1 ; idx <= loop ; idx++)
      output += idx+' '
  
  // output.trim
  return output.trim()
}
describe('HelloWorld.vue', () => {
  it("input 10",function(){
    expect(printStr(10)).toBe("1 2 3 4 5 6 7 8 9 10")
})
})


