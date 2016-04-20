var fs = require('fs');
var buffer = new Buffer(1024);
// fs.open('readme.txt','r+',function(err,fd){
//     if(err){
//         console.error(err);
//     }
//     fs.ftruncate(fd,10,function(err){
//         if(err){
//             console.error(err);
//         }
//         console.info('文件截取成功！');
//         fs.read(fd,buffer,0,buffer.length,0,function(err,bytes){
//             if(err){
//                 console.error(err);
//             }
//             console.log(bytes);
//             if(bytes > 0){
//                 console.log(buffer.slice(0,bytes).toString());
//             }
//             fs.close(fd,function(err){
//                 console.info('文件关闭成功！');
//             })
//             // fs.unlink('readme.txt',function(err){
//             //     if(err){
//             //         console.error(err);
//             //     }
//             //     console.info('文件已经被删除了！');
//             // })
//         })
        
//     })
// });

//一次只能创建一层目录
// fs.mkdir('/temp/',0777,function(err,files){
//     if(err){
//         console.error(err);
//     }
//     console.log('目录创建成功！');
// })
// fs.stat('readme.txt',function(err,stats){
//     console.info(stats.isFile());
// }) 
// fs.readdir('/git/jxc-snapshot/',function(err,files){
//     files.forEach(function(file){
//         console.info(file);
//     })
// })
// fs.rmdir('/temp/',function(err){
//     fs.readdir('/temp/',function(err,files){
//         if(err){
//             return console.error(err);
//         }
//         files.forEach(function(file){
//             console.log(file);
//         })
        
//     })
// })
// fs.rename('read.txt','readme.txt',function(err){
//     if(err){
//         return console.error(err);
//     }
// })
// fs.rename('temp/hello/','temp/world',function(err){
//     console.info('命名成功！');
// })
// fs.rmdir('temp/',function(err){
//     if(err){
//         return console.error(err);
//     }
// })
// fs.readFileSync('readme.txt','utf-8');
// fs.readdir('temp',function(err,files){
//     console.info(files);
// })

// console.info('这是一个外部文件 ，测试Node获取21431241'.length);
var http = require('http');
var url = require('url');
var util = require('util');
http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'});
    res.end(util.inspect(url.parse(req.url,true)));
}).listen(3000);
// console.info(require('os').networkInterfaces());
var path = require('path');
console.log(path.parse('temp/text.txt'));
console.log(path.parse('main.js'));
console.log(path.resolve('main.js'));
