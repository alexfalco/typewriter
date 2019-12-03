

const sentence = "hello there from lighthouse labs";
count = 0

let print = function(data) {
 let data1 = data + "\n"
  for (const char of data1) {
  count = count + 1
  setTimeout(() => process.stdout.write(char),count*50) 
}

}

print(sentence)

