export default (value) => {
  return value.replace(/\d+/g, (node, key)=>{
    return numReplace(node);
  })
}


function numReplace(num){
  switch (num) {
    case '1':
      return '一';
    case '2':
      return '二';
    case '3':
      return '三';
    case '4':
      return '四';
  }
}


// 一个 filter 是一个处理函数，以前一个值为待处理的参数