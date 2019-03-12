<template>  
<div>
<b-navbar toggleable="lg" type="dark" variant="danger" >
    <b-navbar-toggle target="nav_collapse" />
    <b-navbar-brand >NavBar</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item href="#" >Evento</b-nav-item>
        <b-nav-item href="#" >Galeria</b-nav-item>
        <b-nav-item href="#" >Contamos</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search" />
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-navbar-nav>
        <b-nav-item href="#" >Visitanos</b-nav-item>
     </b-navbar-nav>

         <b-navbar-nav>
        <b-nav-item href="#" >Login</b-nav-item>
     </b-navbar-nav>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
  <div>
  <b-carousel
    id="carousel-fade"
    style="text-shadow: 0px 0px 2px #000"
    fade
    indicators
    img-width="1024"
    img-height="480"
  >
    <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12" />
    <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22" />
    <b-carousel-slide caption="First slide" img-src="https://picsum.photos/1024/480/?image=10" />
    <b-carousel-slide caption="Second Slide" img-src="https://picsum.photos/1024/480/?image=12" />
    <b-carousel-slide caption="Third Slide" img-src="https://picsum.photos/1024/480/?image=22" />
  </b-carousel>
</div>
 <hr style="color: black;" noshade="noshade" width="100%"/>
 <h2>Nuestras experiencias</h2>
 <p>Empresa organizadora de toda clase de eventos sociales a nivel nacional, contamos... </p>
 <hr style="color: black;" noshade="noshade" width="100%"/>
/*Aqui viene el Banner*/
 <hr style="color: black;" noshade="noshade" width="100%"/>
 <br>
 <br>
 <h2 align="center">Nuestro trabajo</h2>
 <br>
 <br>
 <table class="egt" align="center" width="100%" >
  <tr>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2066004936988483%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F1926038457651799%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

  </tr>

  <tr>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2075732152682428%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

    <td><iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Fbodaslogieventos%2Fvideos%2F2184693985115111%2F&show_text=0&width=560" width="560" height="315" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe></td>

  </tr>

</table>
 </div>
</template>

<style>

  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  
</style>


