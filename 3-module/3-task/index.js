function camelize(str) {
  return str.split('-')
            .map((item, index) => {
                if (index >= 1) {
                  return item = item.slice(0,1).toUpperCase() + item.slice(1,item.length);
                }

                return item
            })
            .join(""); 

}
