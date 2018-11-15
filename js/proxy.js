const onWatch = (obj, getLogger) => {
    const handler = {
      get(target, property, receiver) {
        getLogger(target, property)
        return Reflect.get(target, property, receiver);
      },
      set(target, property, value, receiver) {
        return Reflect.set(target, property, value);
      }
    };
    return new Proxy(obj, handler);
  };
  function observe(data) {
    Object.keys(data).forEach(function(key) {
      onWatch(data, (data, key) => {
        console.log(`Get '${key}' = ${data[key]}`);
      })
    })
  }
  
  let test = [1, 2, 3]

  let p = onWatch(test, (target, property) => {
    console.log(`Get '${property}' = ${target[property]}`);
  })

  const onWatch = (obj, getLogger) => {
    const handle = {
        get(target, property, receiver) {
            getLogger(target, property);
            return Reflect.get(target, property, receiver)
        },
        set(target, property, receiver) {
            return Reflect.set(target, property, receiver)
        }
    }
    return new Proxy(obj, handle)
  }

  var obj = {key: 123};

  var p = onWatch(obj, (obj, key) => {
      console.log('target:' + obj + 'key:' + key)
  })