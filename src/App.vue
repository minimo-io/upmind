<style>
  @import './css/animate.min.css';
  @import './css/bootstrap.min.css';
  /* @import './css/alt.css'; */
  @import 'https://cdn.jsdelivr.net/npm/@minimo-labs/alt-template@0.5.5/dist/alt.min.css';
  @import './css/brain.css';
</style>
<template>
  <div>

    <div class="container p-0 mt-5">

      <section class="alt-container d-block" style="padding-top:1px;">
        <header class="alt-post-header alt-top-title category-header app-margin mb-0">
        <a class="breadcrumb-back-button d-none" href="#" aria-expanded="true" role="button"><i class="fas fa-reply"></i>&nbsp;volver</a>
        <h1 class="post-title basic-mono category-title" itemprop="name headline"><i class="fas fa-arrow-circle-up mr-1"></i>UpMind<span class="text-danger">.</span></h1>
        <h2 class="post-subtitle category-subtitle read-more">
          <p>
            {{ app_title }} se basa en la idea que nuestra mentalidad y el manejo de nuestras emociones son nuestras verdaderas limitantes.
            Ni tu pasado ni tu futuro son absolutos; sino que su valor depende tu forma comprenderlos,
            de entender lo que le ocurre a tu mente y de tu voluntad de cambiar.

            Vivimos en un mundo de alta velocidad y exigencia.
            <br>
            <span class="bg_yellow">Tomate un tiempo para alcanzar tu máximo potencial</span>.
          </p>
          <p>
            Si necesitas encontrar asistencia psicológica, dirigite a la sección <a href="#"><i class="fas fa-life-ring mr-1"></i>Ayuda</a>.
            <br>
            Si sos un profesional <a href="#"><i class="fas fa-pencil-alt mr-1"></i>Apuntate gratis</a> para que la gente que te necesita pueda encontrarte.
            <br>
            Si necesitas un estímulo <a href="#"><i class="fas fa-lightbulb mr-1"></i>Inspirate</a>
            o <a href="#"><i class="fas fa-vihara mr-1"></i>Medita</a> para calmarte.
            <br>
            Si no sabes demasiado sobre cómo funciona nuestra mente <a href="#"><i class="fas fa-book-reader mr-1"></i>Aprende</a>.
          </p>
          <p>
            ¡Es gratis!
          </p>
        </h2>
        <button id="btn-readmore" data-original-height="" data-status="off" data-text-more="Leer más" data-text-less="Leer menos" class="btn btn-light btn-sm btn-readmore" style="opacity:.5;">Leer más</button>
        <a role="button" href="#" class="btn btn-danger btn-category btn-sm btn-readmore" style="left:-15px;opacity:.5;"><i class="far fa-play-circle d-none d-sm-inline">&nbsp;</i>Empezar ahora</a>
      </header>




      <div class="nav-scroller app-margin mt-3">
      <!-- <div class="container second-container pl-0 pr-0"> -->
      <div class="card-posts-deck card-group">
      <ul class="card-list row list-unstyled">

        <li id="post-2583" class="col-md-4 post-list-item">
      <div class="card">
        <section class="alt-container pr-0 pl-0 pt-0 mt-0">
          <div id="carousel-quotes" class="carousel carousel-quotes slide" data-ride="carousel" data-interval="9000">
            <div class="carousel-inner app-margin mt-0">

              <brain-quote  v-for="quote in quotesList"
                            v-bind:quoting="quote"
                            v-bind:key="quote.id"></brain-quote>

            </div>
            <a class="carousel-control-prev" href="#carousel-quotes" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel-quotes" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </section>
      </div>
      </li>

      <li id="post-1926" class="col-md-4 post-list-item">
      <div class="card">
      <a href="https://alt.minimo.io/inalterados/trastornos-de-ansiedad-tipos-sintomas-y-soluciones/">
      <div class="overlay overlay-purple"></div>
      <div class="card-image img-fluid" style="background-image:url(https://alt.minimo.io/wp-content/uploads/2019/11/ruido.jpeg);"></div>
      </a><div class="card-body"><a href="https://alt.minimo.io/inalterados/trastornos-de-ansiedad-tipos-sintomas-y-soluciones/">
      <h5 class="card-title">Trastornos de ansiedad: tipos, síntomas, y soluciones</h5>
      <div class="card-text card-excerpt"><p>Aprende a reconocer los trastornos de ansiedad y empieza a recorrer el camino para controlarla con esta guía en profundidad</p>
      </div>
      </a><div class="card-text card-meta"><a href="https://alt.minimo.io/inalterados/trastornos-de-ansiedad-tipos-sintomas-y-soluciones/">
      <small class="text-muted">
      Por Mínimo &nbsp;
      5 Nov &nbsp;</small></a><small class="text-muted"><a href="https://alt.minimo.io/inalterados/" class="badge badge-purple">Inalterados</a> </small>
      </div>
      </div>

      </div>
      </li>
      <li id="post-2359" class="col-md-4 post-list-item">
      <div class="card">
      <a href="https://alt.minimo.io/vitamina/musica-para-hacer-gimnasia/">
      <div class="overlay overlay-danger"></div>
      <div class="card-image img-fluid" style="background-image:url(https://alt.minimo.io/wp-content/uploads/2019/11/musica-para-hacer-gimnasia.jpg);"></div>
      <div class="card-body">
      <h5 class="card-title">Música para hacer gimnasia</h5>
      <div class="card-text card-excerpt"><p>¿Sabías que está científicamente comprobado que escuchar música para hacer gimnasia aumenta en un 58% tu rendimiento?</p>
      </div>
      <div class="card-text card-meta">
      <small class="text-muted">
      Por Mínimo &nbsp;
      13 Nov </small>
      </div>
      </div>
      </a>
      </div>
      </li>

      </ul>
      </div>
    <!-- </div> -->
      </div>


      </section>



    </div>
    <footer class="app-margin text-right">
      <br><br>By Minimo<br><br>
    </footer>
    <navbar></navbar>

  </div>
</template>

<script>
import BrainQuote from './components/BrainQuote.vue'
import QuotesData from './data/data.json'

export default {
  name: 'app',
  components:{
    'brain-quote': BrainQuote
  },
  data () {
    return {
      quotesList: QuotesData,
      title: "Brain"
    }
  }
}
</script>

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<link rel="stylesheet" href="css/brain.css">
<style>

</style>
