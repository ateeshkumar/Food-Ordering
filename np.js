const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Best online food delavery in india | myonlinemeal.com</title>
      <link rel="stylesheet" href="css/style.css">
      <link rel="stylesheet" href="css/phone.css">
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&display=swap" rel="stylesheet">
      <style>
      *{
        margin: 0px;
        padding: 0px;
    }
    body{
        font-family: 'Baloo 2', cursive;
    }
    #navbar{
        display: flex;
        align-items: center;
        position: relative;
    }
    #navbar::before{
        content: "";
        background-color: black;
        opacity: 0.7;
        width: 100%;
        height: 100%;
        z-index: -1;
        position: absolute;
    }
    .nav{
        display: flex;
    }
    .logo{
    margin: 0px 16px;
    }
    .logo img{
        margin: 8px 27px;
        width: 59px;
        height: 56px;
    }
    #navbar ul{
        display: flex;
    }
    #navbar ul li{
        display: flex;
        
        
    }
    #navbar ul li a{
        text-decoration: none;
        padding: 13px 12px;
        font-size: 1.6rem;
       color: white;
      /* font-family: 'Lobster', cursive;*/
    }
    #navbar ul li a:hover{
        background-color: white;
        color: black;
        border-radius: 20px;
        height: 20px;
        text-align: center;
    }
    #home{
        display: flex;
        flex-direction: column;
        padding: 12px 113px;
        align-items: center;
        justify-content: center;
        
    }
    #home::before{
        content: "";
        background: url(../b.png) no-repeat center center/cover;
        opacity: 0.7;
        width: 100%;
        height: 500px;
        top: 0px;
        z-index: -1;
        position: absolute;
    }
    #h-primery{
        padding: 13px 12px;
        font-size: 3.1rem;
        color: white
        /*font-family: 'Lobster', cursive;*/
    }
    #home p{
        padding: 5x 0px;
        font-size: 1.6rem;
        text-align: center;
        color: rgb(243, 11, 11);
        /*font-family: 'Lobster', cursive;*/
    }
    .btn{
        border: 2px solid black;
        width: 158px;
        height: 45px;
        cursor: pointer;
        font-size: 1.6rem;
        margin: 16px 41px;
        background-color: rgb(231, 91, 66);
        color: black;
        border-radius: 23px;
       
    }
    .services-container{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;  
        position: relative;
        height: 800px;
    }
    .h1-primery center{
    
    }
    .box{
        border: 2px solid black;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 0px 48px;
        width: 239px;
        height: 372px;
        border-radius: 20px;
        background-color: rgb(250, 245, 244);
    }
    .center{
        text-align: center;
        
    }
    .box img{
        width: 100px;
    }
    .h-primery {
        margin: 44px 65px;
        padding: 16px 40px;
        font-size: 4.1rem;
    }
        .services{
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .services .box img{
            height: 154px;
        display: block;
        margin: auto;
        width: 172px;
        }
        #client-section::before{
        content: " ";
        background: url('../jd.jpg') no-repeat center center/cover;
        position: absolute;
        width: 100%;
        height: 70%;
        opacity: 0.5;
        z-index: -1;
    
        }
        #client-section{
            height: 400px;
    
        }
        #client{
            display: flex;
            justify-content: center;
            align-items: center;
            
        }
        .client-item img{
            width: 207px;
        height: 183px;
        margin: 22px 40px;
    }
        
            .client-item {
         margin: 16px 22px;
        }
    #contact::before{
    content: "";
    position: absolute;
    
    height: 98%;
    width: 100%;
    background: url('../contact.jpg') no-repeat center center/cover;
    opacity: 0.6;
    z-index: -1;
    }
    #contact{
        margin-right: 0px;
        height: 500px;
    }
    #form{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .form-group textarea{
        width: 100%;
        border-radius: 20px;
        text-align: center;
        font-size: 1rem;
    
    }
    .form-group input{
        width: 100%;
        padding: 0px 0px;
        border-radius: 10px;
        text-align: center;
        font-family: 'Baloo 2', cursive;
        font-size: 1rem;
    }
    footer{
        background-color: black;
        color: white;
        text-align: center;
        padding: 12px 13px;
        position: absolute;
        width: 98%;
        top: 2228px;
        
        margin: 79px 0px;
    }
    
      </style>
  </head>
  
  <body>
      <nav id="navbar">
          <div class="logo">
              <img src="img/logo.png" alt="myonlinemeal.com">
          </div>
          <ul>
              <li class="nav"><a href="#">Home</a></li>
              <li class="nav"><a href="#">Servises</a></li>
              <li class="nav"><a href="#">About Us</a></li>
              <li class="nav"><a href="#">Contact Us</a></li>
          </ul>
      </nav>
      <section id="home">
          <h1 id="h-primery">Welcome To MyOnlinemeal</h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eos ab repudiandae officiis
              quos dicta veniam.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur eos ab repudiandae officiis
              quos dicta veniam.</p>
          <button class="btn">Order Now</button>
      </section>
      <section class="services-container">
          <h1 class="h-primery center">Our Services</h1>
          <div class="services">
              <div class="box">
                  <img src="1.png" alt="image not found">
                  <h2>Food Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat eligendi nobis, 
                      veniam ipsam maxime expedita veritatis alias blanditiis, quisquam neque debitis, 
                      illo earum! Autem, obcaecati.</p>
              </div>
              <div class="box">
                  <img src="d.png" alt="image not found">
                  <h2>Food Catering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat eligendi nobis, 
                      veniam ipsam maxime expedita veritatis alias blanditiis, quisquam neque debitis, 
                      illo earum! Autem, obcaecati.</p>
              </div>
              <div class="box">
                  <img src="a.png" alt="image not found">
                  <h2>Bulk Ordering</h2>
                  <p class="center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam fugiat eligendi nobis, 
                      veniam ipsam maxime expedita veritatis alias blanditiis, quisquam neque debitis, 
                      illo earum! Autem, obcaecati.</p>
              </div>
          </div>
      </section>
      <section id="client-section">
          <h1 class="h-primery center">Our Clients</h1>
          <div id="client">
           <div class="client-item">
               <img src="img/logo1.png" alt="">
           </div>
           <div class="client-item">
               <img src="img/logo4.png" alt="client">
           </div>
           <div class="client-item">
               <img src="img/logo2.png" alt="client">
           </div>
           <div class="client-item">
               <img src="img/logo3.png" alt="client">
           </div>
          </div>
      </section>
      <section id="contact">
          <h1 class="h-primery center">Contact Us</h1>
          <div id="form">
              <form action="">
                  <div class="form-group">
                      <label for="name">Name</label>
                  <input type="text" name="name" id="name" placeholder="Enter Your Name">
                  </div>
                  <div class="form-group">
                      Email
                      <!-- <label for="name">Email</label> -->
                  <input type="email" name="name" id="email" placeholder="Enter Your email">
                  </div>
                  <div class="form-group">
                      <label for="Phone No">Phone No</label>
                  <input type="phone" name="name" id="phone" placeholder="Enter Your phone no">
                  </div>
                  <div class="form-group">
                     <label for="">Massege</label>
                  <textarea name="text" id="massege" cols="30" rows="10">Write Here</textarea>
                  </div>
              </form>
          </div>
      </section>
      <footer>
          <div class="center">
              Copyright &COPY; www.myonlinemeal.com
          </div>
      </footer>
  </body>
  
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});