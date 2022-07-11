<template>
  <div>
    <header v-if="isAuthenticated" class="alt-header alt-header--top pt-1">
      <div class="alt-container alt-header__container">
      <a class="alt-header__logo__link brain-logo" href="#">
        <!-- <i class="fas fa-brain mr-1 d-none d-sm-inline-block"></i><span class="d-none">{{ app_title }}</span> -->
        <i class="fas fa-arrow-circle-up mr-1 d-none d-sm-inline-block"></i><span Xclass="d-none">{{ app_title }}</span>

      </a>
      <nav class="alt-header__left">
        <h1 class="logo d-none" itemprop="name headline">
          <i class="fas fa-arrow-circle-up mr-1"></i>UpMind<span class="text-danger" style="color:red !important;">.</span>
        </h1>
      </nav>
      <div class="alt-header__search__cover" onclick="document.body.classList.remove('search--open'); return false;"></div>

      <nav class="alt-header__right">

        <a class="alt-header__left__menu-trigger" href="#" onclick="jQuery('#hamburger-show-menu').trigger('click'); return false;" data-menu-text="Menú" data-menu-close="Cerrar" role="button" aria-expanded="true">
          Menú
        </a>
        <span class="alt-header__separator alt-separator">/</span>
        <span class="alt-header__search">
          <a class="alt-header__search-trigger" href="#" data-toggle="modal" data-target="#alt-modal">
            <span class="alt-header__search-icon"><svg xmlns="http://www.w3.org/2000/svg" width="15.44" height="15.441" viewBox="-0.449 -0.658 15.44 15.441"><circle fill="none" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" cx="5.974" cy="5.765" r="3.482"></circle><path fill="none" stroke="currentColor" stroke-width="1.2" stroke-miterlimit="10" d="M8.436 8.228l3.446 3.5"></path></svg></span>
          </a>
        </span>
        <span class="alt-header__separator alt-separator">/</span>
        <a href="#"><i class="fas fa-cog"></i></a>

        <div class="alt-header__newsletter d-none">
        <a href="http://eepurl.com/gI65y9" data-toggle="modal" data-target="#subscribe-modal">
        <i class="far fa-play-circle hide-730 pr-2"></i> </a>
        </div>

        <span class="alt-header__separator alt-separator alt-hide">/</span>
        <div class="alt-header__user alt-header__user--anonymous alt-hide">
        <div class="alt-user-nav">
        <a class="alt-header__sign-in" href="#" title="Sign In">
        <svg viewBox="0 0 24 24" fill="currentColor"><path fill="none" d="M0 0h24v24H0V0z"></path><g><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"></path></g></svg>
        <span>Ingresar</span>
        </a>
        </div>
        </div>
      </nav>
      </div>
    </header>

    <div id="fullscreen-menu" class="animated pulse extrafast">
      <div class="menu-inner">
      <nav class="menu-nav menu-nav-primary">
      <div class="menu-alt_menu_primario-container">
        <ul id="menu-alt_menu_primario" class="menu">
          <!-- <li id="menu-item-2115" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-home menu-item-2115"><a href="https://alt.minimo.io/">Inicio</a></li> -->
      <li id="menu-item-1976" class="menu-item menu-item-type-taxonomy menu-item-object-category current-menu-item menu-item-1976"><a href="https://alt.minimo.io/inalterados/" aria-current="page"><i class="fas fa-life-ring mr-1"></i>Recibe Ayuda</a></li>
      <li id="menu-item-2124" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2124"><a href="https://alt.minimo.io/buscavidas/"><i class="fas fa-lightbulb mr-1"></i>Inspirate</a></li>
      <li id="menu-item-2122" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2122"><a href="https://alt.minimo.io/vitamina/"><i class="fas fa-book-reader mr-1"></i>Aprende</a></li>
      <li id="menu-item-2111" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2111"><a href="https://alt.minimo.io/wanderlust/"><i class="fas fa-vihara mr-1"></i>Medita</a></li>

      </ul></div>
        <ul class="d-none">
          <li id="menu-item-more" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-more"><a class="menu-item-button-more" href="#" aria-expanded="true" role="button"><i class="fas fa-plus"></i></a></li>
        </ul>
      </nav>
      <nav class="menu-nav menu-nav-secondary alt-hide">
      <div class="menu-alt_menu_secundario-container"><ul id="menu-alt_menu_secundario" class="menu">
      <li id="menu-item-2123" class="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-2123"><a href="https://alt.minimo.io/al-santo-pepe/">Donar</a></li>
      </ul></div><ul><li id="menu-item-more" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-more"><a class="menu-item-button-back" href="#" aria-expanded="true" role="button"><i class="fas fa-reply"></i></a></li></ul> </nav>
      <div class="social">
      <div class="social-icons">
      <a href="https://wa.me/59896666902" target="_blank" class="icon">
      <i class="fab fa-whatsapp-square fa-lg"></i>
      </a>
      <div class="langs icon">
      <a href="https://alt.minimo.io/nosotros/">NOSOTROS</a>
      </div>
      </div>
      </div>
      </div>
    </div>

</div>
</template>

<script>
export default{
  data(){
    return {

    }
  },
  computed: {
    isAuthenticated() {
      // return this.$store.getters.isAuthenticated
      return true;
    },
  }
}
</script>
