var mysql = require("mysql");
var express = require("express");
var app = express();
var cors = require("cors");
const multer = require('multer');
var bodyParser=require("body-parser");
const path=require("path");
const nodemailer = require("nodemailer");

app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const {query}=require("express");

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"nlf",
}
);

con.connect(
    function(err){
        if(err) throw err;
        console.log('connected');
    }

);

app.post("/api/insert", (req,resp)=>{
    var uname = req.body.name;
    var uaddress = req.body.address;
    var uphone = req.body.mob;
    var uemail = req.body.email;
    var upassword = req.body.pass;

    const query = "Insert into manage_user (name,address,phone_number,email,password) values (?,?,?,?,?)";
    con.query(query,[uname,uaddress,uphone,uemail,upassword]);
    resp.send({message:"Sucessfully registered...!!"});
}
);

const storage=multer.diskStorage({
    destination:path.join(__dirname,'./public/'),
    filename: function(req, file, callback) {
        callback(null, Date.now() + '-' + path.extname(file.originalname))
}
})

    var upload1=multer({storage:storage});
    var multi=upload1.fields([{name:'upimage'}]);

app.post("/api/add1",multi,(req,resp)=>{
    if(req.files){
   const a=req.files.upimage[0];
   var b=a.filename;
   var pro_name = req.body.name;
   var actual_price = req.body.product_price;
   var selling_price = req.body.selling_price;
   var condition = req.body.condition;
   var quantity = req.body.quantity;
   var description = req.body.description;
   var cust = "0";
   var email =req.body.email;
   var status = "Pending";
   var cust_status="Not Delivered";
   
   const query = "INSERT INTO product_details (email, d_from, pro_name, pro_price, sell_price, pro_condition, pro_image, pro_quantity, pro_desc, pro_status, cust_status) VALUES (?,?,?,?,?,?,?,?,?,?,?)";
   con.query(query,[email,cust,pro_name,actual_price,selling_price,condition,b,quantity,description,status,cust_status]);
   //resp.send({message:"Details are sucessfully added "});

   const query2="Select * from manage_user where email=?";
    con.query(query2,[email],(err,result)=>{
        if(result.length > 0)
        {
           //resp.send(result);
            var name=result[0].name;

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: "rutul17shah@gmail.com",
          
            subject: "New Life Admin",
            text: "Hello Admin, Your have a new product ("+ pro_name  +") from "+ email +" in database. ",
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              //console.log("Email sent:", info.response);
              resp.send({message:"Details are sucessfully added"});
            }
          });
          resp.send({message:"Details are sucessfully added"});
           //console.log(pass);
        }
        else
        {
            resp.send({message:"You do not have an account "});
        }
    });
}
else
    {
        console.log("Not found");
    }
});

/*
app.post("/api/add", (req,resp)=>{
    var pro_name = req.body.name;
    var actual_price = req.body.act_price;
    var selling_price = req.body.sell_price;
    var condition = req.body.condition;
    var quantity = req.body.quan;
    var description = req.body.desc;
    var image = req.body.image;
    var cust = "0";
    var email =req.body.email;
    var status = "Pending";
    var cust_status="Not Delivered";
    //var admin_status = "Not Recieved";
    //var pay_status ="Pending";

    const query = "Insert into product_details (pro_name,pro_price,sell_price,pro_condition,pro_quantity,pro_desc,pro_image,d_from,pro_status,email,cust_status) values (?,?,?,?,?,?,?,?,?,?,?)";
    con.query(query,[pro_name,actual_price,selling_price,condition,quantity,description,image,cust,status,email,cust_status]);
    resp.send({message:"Details are sucessfully added "});
}
);




app.post("/api/detail", (req,resp)=>{
    var pro_name = req.body.name;
    var actual_price = req.body.actual;
    var selling_price = req.body.selling;
    var quantity = req.body.quantity;
    var image = req.body.image;
    var condition = req.body.condition;
    var description = req.body.description;
    var admin = "1" ;

    const query = "Insert into product_details (pro_name,pro_price,sell_price,pro_quantity,pro_image,pro_desc,d_from,pro_condition) values (?,?,?,?,?,?,?,?)";
    con.query(query,[pro_name,actual_price,selling_price,quantity,image,description,admin,condition]);
    resp.send({message:"Details are sucessfully added in database "});

}
);
*/

app.post("/api/detail",multi,(req,resp)=>{
    if(req.files){
   const a=req.files.upimage[0];
   var b=a.filename;
   var pro_name = req.body.name;
   var actual_price = req.body.act_price;
   var selling_price = req.body.sell_price;
   var condition = req.body.condition;
   var quantity = req.body.quantity;
   var description = req.body.description;
   var admin = "1";
   var status = "Admin"
   
   const query = "Insert into product_details (pro_name,pro_price,sell_price,pro_quantity,pro_image,pro_desc,d_from,pro_condition,pro_status) values (?,?,?,?,?,?,?,?,?)";
    con.query(query,[pro_name,actual_price,selling_price,quantity,b,description,admin,condition,status]);
    resp.send({message:"Details are sucessfully added in database "});
}
else
    {
        console.log("Not found");
    }
});




app.post("/api/update", (req,resp)=>{

    var status = "Delivered";
    var id = req.body.id;
    var date=req.body.date;
    var email =req.body.email;
    var price =req.body.price;
    var admin ="Not Recieved"
    var name =req.body.name;
    var payment = "Incomplete"
    var gst = price/8;

    //  UPDATE `product_details` SET `cust_status` = 'Not Delivered' 
    const query = "UPDATE product_details SET cust_status=? WHERE d_id=?";
    con.query(query,[status,id]);
    //resp.send({message:"Updated"});


    const query2 = "Insert into manage_order (cust_status,d_id,email,o_price,date,admin_status,name,payment,gst) values (?,?,?,?,?,?,?,?,?)";
    con.query(query2,[status,id,email,price,date,admin,name,payment,gst]);
    //resp.send({message:"added in database "});


    const query3="Select * from manage_user where email=?";
    con.query(query3,[email],(err,result)=>{
        if(result.length > 0)
        {
           //resp.send(result);

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: "rutul17shah@gmail.com",
          
            subject: "New Life Admin",
            text: "Hello Admin, Your product of id : "+id+ " from the user: "+ email +" is Delivered",
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              //console.log("Email sent:", info.response);
              resp.send({message:"Details are sucessfully added"});
            }
          });
          resp.send({message:"Product is sucessfully delivered..."});
           //console.log(pass);
        }
        else
        {
            resp.send({message:"You do not have an account "});
        }
    });
}
);

app.get('/api/total_pro', (req,resp)=>{

    const ins="SELECT COUNT(d_id) as count FROM product_details";
        con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
        });
}); 



app.get('/api/tot_order', (req,resp)=>{

    const ins="SELECT COUNT(o_id) as count FROM manage_order";
        con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
        });
});


app.get('/api/tot_user', (req,resp)=>{

    const ins="SELECT COUNT(u_id) as count FROM manage_user";
        con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
        });
});


app.get('/api/total_detail', (req,resp)=>{

    const ins2="SELECT COUNT(d_id) as a, pro_status as b FROM product_details GROUP BY pro_status;"
        con.query(ins2,(err,result1)=>{
        console.log(result1);
        resp.send(result1);
        });
});
 
app.get('/api/order_sts', (req,resp)=>{

    const ins2="SELECT COUNT(o_id) as a, admin_status as b FROM manage_order GROUP BY admin_status;"
        con.query(ins2,(err,result1)=>{
        console.log(result1);
        resp.send(result1);
        });
});

app.get('/api/accept_dash', (req,resp)=>{

    const ins2="select * from product_details";
        con.query(ins2,(err,result1)=>{
        console.log(result1);
        resp.send(result1);
        });
});



/*
app.get('/api/pdf', (req,resp)=>{

    const ins="select * from manage_order";
    con.query(ins,(err,result)=>{
        console.log(result);
        resp.send(result);
        });         
    
    });



app.get('/api/pdf_r', (req,resp)=>{

    var pro = req.query.pro;

    const ins="select * from manage_order where admin_status=?";

        con.query(ins,[pro],(err,result)=>{
            console.log(result);
            resp.send(result);
            });         
            
            });
*/          


app.get('/api/recieve', (req,resp)=>{
    var d_id = req.query.id;
    var admin_status = "Recieved";
    var email = req.query.email;
    const query="Update manage_order SET admin_status=? WHERE d_id=?";
    con.query(query,[admin_status,d_id]);
    //resp.send({message:"updated in database "});

    const query2="Select * from manage_user where email=?";
    con.query(query2,[email],(err,result)=>{
        if(result.length > 0)
        {
           //resp.send(result);
            var name=result[0].name;

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: email,
          
            subject: "New Life Admin",
            text: "Hello "+name+" , Your product of id : "+ d_id+" is Recieved." ,
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              //console.log("Email sent:", info.response);
              resp.send({message:"Details are sucessfully added"});
            }
          });
          resp.send({message:"Details are sucessfully updated"});
           //console.log(pass);
        }
        else
        {
            resp.send({message:"You do not have an account "});
        }
    });
}
);



app.get('/api/get1', (req,resp)=>{
    const ins="select * from product_details";
con.query(ins,(err,result)=>{
console.log(result);
resp.send(result);
});

});



app.get('/api/report', (req,resp)=>{
    const ins="select * from manage_order";
con.query(ins,(err,result)=>{
console.log(result);
resp.send(result);
});

});


app.get('/api/report2', (req,resp)=>{
    const ins="select * from product_details";
con.query(ins,(err,result)=>{
console.log(result);
resp.send(result);
});

});



app.get('/api/sortlist', (req,resp)=>{
    var pro=req.query.pro;
    var x = req.query.date1;
    var y = req.query.date2;

    if (pro =="" || pro == null ) {
        
        const ins2="SELECT * FROM manage_order WHERE date BETWEEN ? AND ? ";
        con.query(ins2,[x,y],(err,result)=>{
        console.log(result);
        resp.send(result);
        }); 
    } else {
        const ins="SELECT * FROM manage_order WHERE admin_status=? ";
        con.query(ins,[pro],(err,result)=>{
        console.log(result.length);
        resp.send(result);
        });     

    }
   
});




app.get('/api/sortlist2', (req,resp)=>{

    var pro=req.query.pro;
    const ins="SELECT * FROM product_details WHERE pro_status=? ";
    con.query(ins,[pro],(err,result)=>{
    console.log(result.length);
    resp.send(result);
    });  
});



app.get('/api/sortlist3', (req,resp)=>{

    var pro2=req.query.pro2;
    const ins="SELECT * FROM manage_order WHERE payment=? ";
    con.query(ins,[pro2],(err,result)=>{
    console.log(result.length);
    resp.send(result);
    });  
});

app.get('/api/get2', (req,resp)=>{
    const ins="select * from manage_user";
con.query(ins,(err,result)=>{
console.log(result);
resp.send(result);
});

});

app.get('/api/order', (req,resp)=>{
    const ins="SELECT * FROM manage_order";
    con.query(ins,(err,result)=>{
    console.log(result);
    resp.send(result);
    });         

});


app.get('/api/yeslist', (req,resp)=>{

    var ac='Accept';
    const ins="SELECT * FROM product_details WHERE pro_status=? ";
con.query(ins,[ac],(err,result)=>{
console.log(result);
resp.send(result);
});         

});



app.get('/api/nolist', (req,resp)=>{

    var ac='Reject';
    const ins="SELECT * FROM product_details WHERE pro_status=? ";
con.query(ins,[ac],(err,result)=>{
console.log(result);
resp.send(result);
});         
});


app.get('/api/newlist', (req,resp)=>{

    var ac='Pending';
    const ins="SELECT * FROM product_details WHERE pro_status=? ";

con.query(ins,[ac],(err,result)=>{
console.log(result);
resp.send(result);
});         
});


app.post("/api/login", (req,resp)=>{
   
    var username = req.body.name;
    var userpassword = req.body.pass;

    const query="Select * from manage_user where email=? and password=?";
    con.query(query,[username,userpassword],(err,result)=>{
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"Please enter correct email id and password"});
        }
    });
    //resp.json("");
});


app.post("/api/email", (req,resp)=>{
   
    var email = req.body.name;

    const query="Select * from manage_user where email=?";
    con.query(query,[email],(err,result)=>{
        if(result.length > 0)
        {
           resp.send(result);
           var pass=result[0].password;
            var name=result[0].name;

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: email,
          
            subject: "New Life Security",
            text: "Hello , "  + name + "\n" +  " Your Passwors is --->>> " + pass + " <<<--- .",
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              //console.log("Email sent:", info.response);
            //  resp.send({message:"Password Send on Email Id!!!"});
            }
          });
         
           //console.log(pass);
        }
        else
        {
            resp.send({message:"You do not have an account "});
        }
       // resp.send({message:"Password Send on Email Id!!!"});

    });
});


app.post("/api/oemail", (req,resp)=>{
   
    var email = req.body.email;

    const query="Select * from o_login where email=?";
    con.query(query,[email],(err,result)=>{
        if(result.length > 0)
        {
           resp.send(result);
           var pass=result[0].password;
            var name=result[0].Name;

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: email,
          
            subject: "New Life Security",
            text: "Hello Admin, "+ "\n" +  " Your Passwors is --->>> " + pass + " <<<--- .",
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              //console.log("Email sent:", info.response);
                resp.send({message:"Password Send on Email Id!!!"});
            }
          });        
           //console.log(pass);
        }
        else
        {
            resp.send({message:"You do not have an account "});
        }

    });
});


app.get('/api/get3', (req,resp)=>{
    var Uemail=req.query.Uemail;
    console.log(Uemail);
    //const ins = "SELECT a.*,b.*,c.* FROM product_details as a ,manage_order as b,manage_user as c where a.email=c.email and a.email=? and b.email=? AND c.email=?";
    //const ins = "SELECT a.*,b.* FROM product_details as a ,manage_order as b where a.d_id=b.d_id and a.email=? and b.email=?";
    //const ins = "SELECT a.*,b.* FROM product_details as a ,manage_order as b where a.email=?" ;
    const ins="select * from product_details where email=?";
    //const ins= "SELECT * FROM product_details JOIN manage_order USING (?)";
    con.query(ins,[Uemail],(err,result)=>{
        
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"You do not have a ticket "});
        }
        });

});


app.get('/api/get6', (req,resp)=>{

    var Uemail=req.query.Uemail;
    const ins="select * from manage_order where email=?";
    con.query(ins,[Uemail],(err,result)=>{
        
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"You do not have an invoice"});
        }
        });

});


app.get('/api/search', (req,resp)=>{

    var value = req.query.x;

    const ins="select * from product_details where pro_name LIKE '"+ value + "%'";

    con.query(ins,[value],(err,result)=>{   
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"Product Not Found.."});
        }
        });
});

app.get('/api/get5', (req,resp)=>{
    var Uemail=req.query.Uemail;
    var id =req.query.id;

    const ins = "SELECT a.*,b.*,c.* FROM product_details as a ,manage_order as b,manage_user as c where a.d_id=b.d_id and a.email=? and b.email=? AND c.email=? and b.o_id=?";
    con.query(ins,[Uemail,Uemail,Uemail,id],(err,result)=>{
        
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"You do not have an invoice "});
        }
        });

});

/*
app.get('/api/get5', (req,resp)=>{
    var Uemail=req.query.Uemail;
    const ins="select * from manage_order where email=?";
    con.query(ins,[Uemail],(err,result)=>{
        
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"You do not have an invoice"});
        }
        });

});
 */

app.get('/api/profile', (req,resp)=>{

    var admin=req.query.admin_email;
    const ins="select * from o_login where email=?";
    con.query(ins,[admin],(err,result)=>{
        
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"You do not have an account"});
        }
        });

});

app.get('/api/custprofile', (req,resp)=>{

    var email=req.query.cust_email;
    const ins="select * from manage_user where email=?";
    con.query(ins,[email],(err,result)=>{
        
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"You do not have an account"});
        }
        });

});


app.post("/api/update_detail", (req,resp)=>{
   
    var oldpass = req.body.pass;
    var admemail =req.body.email;
    var name =req.body.name;

    const query="Select * from o_login where email=? and password=?";
    con.query(query,[admemail,oldpass],(err,result)=>{
        if(result.length > 0)
        {
        const query2="Update o_login SET Name=? WHERE email=?";
        con.query(query2,[name,admemail]);
        //resp.send({message:"Detail Updated Sucessfully"}); 
        }
        else
        {
            resp.send({message:"Incorrect password"});
        }

    });
});

app.post("/api/cust_detail", (req,resp)=>{
   
    var name = req.body.name;
    var email =req.body.email;
    var phone =req.body.phone;
    var address =req.body.address;
    var password =req.body.password;

    const query="Select * from manage_user where email=? and password=?";
    con.query(query,[email,password],(err,result)=>{
        if(result.length > 0)
        {
        const query2="Update manage_user SET name=?,address=?,phone_number=? WHERE email=?";
        con.query(query2,[name,address,phone,email]);
        resp.send({message:"Details Updated Sucessfully "}); 
        }
        else
        {
            resp.send({message:"Incorrect password"});
        }

    });
});

app.post("/api/updatepass", (req,resp)=>{
   
    var old_pass = req.body.oldpassword;
    var new_pass = req.body.newpassword;
    var adm_email= req.body.emailadd;

    const query="Select * from o_login where email=? and password=?";
    con.query(query,[adm_email,old_pass],(err,result)=>{
        if(result.length > 0)
        {
        const query2="Update o_login SET password=? WHERE email=?";
        con.query(query2,[new_pass,adm_email]);
        //resp.send({message:"Password Updated Sucessfully"}); 
        }
        else
        {
            resp.send({message:"Incorrect password"});
        }

    });
});


app.post("/api/cust_pass", (req,resp)=>{
   
    var oldpass = req.body.password;
    var newpass = req.body.newpassword;
    var email= req.body.email;

    const query="Select * from manage_user where email=? and password=?";
    con.query(query,[email,oldpass],(err,result)=>{
        if(result.length > 0)
        {
        const query2="Update manage_user SET password=? WHERE email=?";
        con.query(query2,[newpass,email]);
        //resp.send({message:"Password Updated Sucessfully"}); 
        }
        else
        {
            resp.send({message:"Incorrect password"});
        }

    });
});


app.get('/api/get4', (req,resp)=>{
    var Uemail=req.query.Uemail;
    console.log(Uemail);
    const ins="select * from manage_order where email=?";
    con.query(ins,[Uemail],(err,result)=>{
        
        console.log(result);
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"Please enter correct email id and password"});
        }
        });

});




app.get('/api/accept', (req,resp)=>{
    var d_id = req.query.status;
    var email =req.query.email;
    var id =req.query.id;
    var pro_status = "Accept";

    const query="Update product_details SET pro_status=? WHERE d_id=?";
    con.query(query,[pro_status,d_id]);
    //resp.send({message:"Details are sucessfully updated in database "});

    const query2="Select * from manage_user where email=?";
    con.query(query2,[email],(err,result)=>{
        if(result.length > 0)
        {
           //resp.send(result);
            var name=result[0].name;

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: email,
          
            subject: "New Life Admin",
            text: "Hello "+ name +" , Your product of id "+ id +" is " + pro_status + "ed .",
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              resp.send({message:"Details are sucessfully added"});
            }
          });
          resp.send({message:"Product Accepted"});

        }
        else
        {
            resp.send({message:"You do not have an account "});
        }
    });
}
);



app.get('/api/reject', (req,resp)=>{
    var d_id = req.query.status;
    var email =req.query.email;
    var id =req.query.id;
    var pro_status = "Reject";

    const query="Update product_details SET pro_status=? WHERE d_id=?";
    con.query(query,[pro_status,d_id]);
    //resp.send({message:"Details are sucessfully updated in database "});

    const query2="Select * from manage_user where email=?";
    con.query(query2,[email],(err,result)=>{
        if(result.length > 0)
        {
           //resp.send(result);
            var name=result[0].name;

           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: email,
          
            subject: "New Life Admin",
            text: "Hello "+ name +" , Your product of id "+ id +" is " + pro_status + "ed .",
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              resp.send({message:"Details are sucessfully added"});
            }
          });
          resp.send({message:"Product Rejected"});

        }
        else
        {
            resp.send({message:"You do not have an account "});
        }
    });
}
);



app.get('/api/delete', (req,resp)=>{
    var u_id = req.query.status;
    console.log(u_id);

    const query="DELETE FROM  `manage_user` WHERE u_id=?";
    con.query(query,[u_id]);
    resp.send({message:"Poof! The user has been removed from the database!"});
}
);

app.post("/api/verify",(req,resp)=>{

    var email =req.body.email; 
    var id = req.body.id;
    var status ="Success";
    var random = Math.floor(1000 + Math.random() * 9000);
    var a =random;

    const query = "INSERT INTO payment (o_id, email, pa_status) VALUES (?,?,?)";
    con.query(query,[id,email,status]);
    //resp.send({message:"Sucess...!!"}); 
    
    const query2 = "UPDATE manage_order SET payment=?,invoice=? WHERE o_id=?";
    con.query(query2,[status,a,id]);
    //resp.send({message:"Updated..!!"});


    const query3="Select * from manage_user where email=?";
    con.query(query3,[email],(err,result)=>{
        if(result.length > 0)
        {
           //resp.send(result);
           var name=result[0].name;
           const smtpTransport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
              user: "rutul17shah@gmail.com",
              pass: "mxznyzzmwcywfwgf",
            },
          });
          const message = {
            from: "rutul17shah@gmail.com",
            to: email,
          
            subject: "New Life Admin",
            text: "Hello "+name+" , Your payment of id: "+ id +" is successfully completed. You may download your invoice at our site. " ,
          };

         smtpTransport.sendMail(message, (error, info) => {
            if (error) {
              console.error(error);
            } else {
              //console.log("Email sent:", info.response);
              resp.send({message:"Details are sucessfully added"});
            }
          });
          resp.send({message:"Payment Successful and updated in db..."});
           //console.log(pass);
        }
        else
        {
            resp.send({message:"You do not have an account "});
        }
    });
 }
 );

 app.post("/api/support", (req,resp)=>{
    var uname = req.body.name;
    var uemail = req.body.email;
    var comment = req.body.msg;

    const query = "Insert into support (name,email,message) values (?,?,?)";
    con.query(query,[uname,uemail,comment]);
    resp.send({message:"Your message is successfully submited...!"});
}
);

app.post("/api/extra", (req,resp)=>{
    var name = req.body.a;

    const query = "Insert into extra (name) value (?)";
    con.query(query,[name]);
    resp.send({message:"Your message is successfully submited...!"});
}
);



app.get('/api/extra2', (req,resp)=>{
    const ins="select * from extra";
con.query(ins,(err,result)=>{
console.log(result);
resp.send(result);
});

});


app.post("/api/owner", (req,resp)=>{
   
    var adminemail = req.body.email;
    var adminpassword = req.body.password;

    const query="SELECT * FROM o_login where email=? and password=?";
    con.query(query,[adminemail,adminpassword],(err,result)=>{
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"Please enter correct email id and password"});
        }
    });

});


app.listen(1337);
