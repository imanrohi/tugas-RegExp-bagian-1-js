function panggilRegexp(value) {
  let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";
  var value = [
    ["cC"],
    ["kK"],
    ["lL"]
  ]
  var cC = /[cC]/g
  var kK = /[kK]/g
  var lL = /[lL]/g
  for (var i=3;i<=value.length;i++){
    console.log(str.match(cC))
    console.log(str.match(kK))
    console.log(str.match(lL))
  }
}
panggilRegexp()



//OUTPUT
// [ 'c', 'C' ]
// [ 'k', 'K' ]
// [ 'l', 'L' ]
