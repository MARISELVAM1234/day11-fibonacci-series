let a = parseInt(prompt());
b = 1;
c = 0;
for (str=0; str<=a; str++){
     d = b+c;
     b = c;
     c = d;
     console.log(d)
}