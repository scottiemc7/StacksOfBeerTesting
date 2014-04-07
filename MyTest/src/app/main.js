require.config({
  baseURL: './src/app'
})

require(['test'], function(t) {
  t.testMe();
})
