<template>
  <div>
    <nav
      :class="[
        'navbar',
        'navbar-expand-lg',
        'navbar-light',
        'fixed-top',
        { 'navbar-scrolled': isScrolled },
      ]"
      id="mainNav"
    >
      <div class="container d-flex justify-content-between px-4 px-lg-5">
        <router-link
          to="/"
          class="p-1 text-decoration-none fw-bold logo-container d-flex align-items-center"
        >
          <img
            class="logo"
            style="width: 50px; margin-right: 10px"
            src="../../assets/img/log.png"
          />
        </router-link>
        <i   type="button" @click="toggleNavbar" class="bi bi-list text-white fs-2 navbar-toggler"></i>
        <!-- <button
          class="navbar-toggler btn-danger1"
          type="button"
          @click="toggleNavbar"
        >
        {{ $t('Menu') }}
          <i class="fas fa-bars"></i> 
        </button> --> 

        <div
          :class="['collapse', 'navbar-collapse', { show: navbarOpen }]"
          id="navbarResponsive"
        >
          <ul class="navbar-nav ms-auto fw-bold">
            <li @click="closeNavbar" class="nav-item">
              <router-link 
              
                to="/"
                class="nav-link pointer"
                :class="[
                  isRouteActive('/') ? 'text-white active' : 'text-white-50',
                  { 'active-link': isRouteActive('/') },
                ]"
              >
                {{$t('Company')}}
              </router-link>
            </li>

            <!-- <li class="nav-item">
              <router-link
                to="/com"
                class="nav-link"
                :class="[
                  isRouteActive('/com') ? 'text-white active' : 'text-white-50',
                  { 'active-link ': isRouteActive('/com') },
                ]"
              >
                COMMUNITY
              </router-link>
            </li> -->

            <li  @click="closeNavbar" class="nav-item">
              <router-link
             
                to="/team"
                class="nav-link"
                :class="[
                  isRouteActive('/team')
                    ? 'text-white active'
                    : 'text-white-50',
                  { 'active-link ': isRouteActive('/team') },
                ]"
              >
                {{$t('Team')}}
              </router-link>
            </li>

            <!-- <li class="nav-item">
              <router-link
                to="/more"
                class="nav-link"
                :class="[
                  isRouteActive('/more')
                    ? 'text-white active'
                    : 'text-white-50',
                  { 'active-link ': isRouteActive('/more') },
                ]"
              >
                MORE
              </router-link>
            </li> -->

            <li   @click="closeNavbar" class="nav-item">
              <router-link
            
                to="/about"
                class="nav-link"
                :class="[
                  isRouteActive('/about')
                    ? 'text-white active'
                    : 'text-white-50',
                  { 'active-link ': isRouteActive('/about') },
                ]"
              >
                4V.Bridge<span class="text-danger">X</span>
              </router-link>
            </li>
           
           
           
           
            <div class="nav-item drop-menu" style="" v-if="!isDesktop">
              <hr class="text-white"/>
              <router-link
              @click="closeNavbar" to="/terms" class=""
              style="display: block;"> 
                <li @click="$router.push('/terms')"  class="mt-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="turquoise" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg> {{$t('TERMS OF SERVICE')}} </li>
</router-link>

<router-link
@click="closeNavbar" to="/privacy" class=""
style="display: block;">
  <li @click="$router.push('/privacy')" class="mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-shield-check" viewBox="0 0 16 16">
  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
</svg> {{$t('PRIVACY POLICY')}} </li>
</router-link>

<router-link
@click="closeNavbar" to="/blog" class=""
style="display: block;"><li @click="$router.push('/blog')"  class="mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
</svg> {{$t('WHITE PAPER')}} </li>
</router-link>
<router-link
@click="closeNavbar" to="/benefits" class=""
style="display: block;"><li @click="$router.push('/benefits')"  class="mt-4 text-uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-layers" viewBox="0 0 16 16">
  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z"/>
</svg> {{$t('TECH SPEC')}} </li>
</router-link>
<router-link
@click="closeNavbar" to="/referal" class=""
style="display: block;"><li @click="$router.push('/referal')"  class="mt-4"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-diagram-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg> {{$t('ROAD MAP')}} </li>
</router-link>
<img class="" style="width: 80px;" src="https://static.vecteezy.com/system/resources/previews/022/721/714/non_2x/youtube-logo-for-popular-online-media-content-creation-website-and-application-free-png.png">
 
            </div>
          
            <li class="nav-item text-white" v-if="isDesktop">
              <div class="dropdown nav-item d-flex align-items-center">
                <span
                  style="font-size: px;"
                  class=" nav-link dropdown-toggle text-white-50 pointer "
                  type="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                  @click.stop="toggleDropdown"
                >
                  {{$t('Documentation')}}
                </span>
                <div style=" background-color:#091520;" class="dropdown-menu" :class="{ show: isDropdownOpen }">
                  
            
            <li  class="mt-2 "><router-link to="/terms" class="pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="turquoise" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg> {{$t('TERMS OF SERVICE')}}</router-link></li>
<li  class="mt-2 pointer"><router-link to="/privacy" class="pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-shield-check" viewBox="0 0 16 16">
  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
</svg> {{$t('PRIVACY POLICY')}}</router-link></li>
            <li  class="mt-2"><router-link to="/blog" class="pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
</svg> {{$t('WHITE PAPER')}}</router-link></li>
            <li  class="mt-2"><router-link to="/benefits" class="pointer text-uppercase"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-layers" viewBox="0 0 16 16">
  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z"/>
</svg> {{$t('TECH SPEC')}}</router-link></li>
            <li  class="mt-2"><router-link to="/referal" class="pointer"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-diagram-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg> {{$t('ROAD MAP')}} </router-link></li> 
<!-- <li  class="mt-2"><router-link to="/terms" class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="turquoise" class="bi bi-card-checklist" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M7 5.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 1 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0M7 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m-1.496-.854a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0l-.5-.5a.5.5 0 0 1 .708-.708l.146.147 1.146-1.147a.5.5 0 0 1 .708 0"/>
</svg>{{$t('TERMS OF SERVISE')}} </router-link></li>
<li class="mt-2"><router-link to="/privacy" class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-shield-check" viewBox="0 0 16 16">
  <path d="M5.338 1.59a61 61 0 0 0-2.837.856.48.48 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.7 10.7 0 0 0 2.287 2.233c.346.244.652.42.893.533q.18.085.293.118a1 1 0 0 0 .101.025 1 1 0 0 0 .1-.025q.114-.034.294-.118c.24-.113.547-.29.893-.533a10.7 10.7 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.8 11.8 0 0 1-2.517 2.453 7 7 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7 7 0 0 1-1.048-.625 11.8 11.8 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 63 63 0 0 1 5.072.56"/>
  <path d="M10.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
</svg>{{$t('PRIVACY POLICY')}} </router-link></li>
            <li  class="mt-2"><router-link to="/blog" class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-heading" viewBox="0 0 16 16">
  <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2z"/>
  <path d="M3 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m0-5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5z"/>
</svg>{{$t('WHITE PAPER')}} </router-link></li>
            <li  class="mt-2"><router-link to="/benefits" class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" class="bi bi-layers" viewBox="0 0 16 16">
  <path d="M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0zM8 9.433 1.562 6 8 2.567 14.438 6z"/>
</svg>{{$t('TECH SPEC')}} </router-link></li>
            <li  class="mt-2"><router-link to="/referal" class=""><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" class="bi bi-diagram-2" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 3.5A1.5 1.5 0 0 1 7.5 2h1A1.5 1.5 0 0 1 10 3.5v1A1.5 1.5 0 0 1 8.5 6v1H11a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V8h-5v.5a.5.5 0 0 1-1 0v-1A.5.5 0 0 1 5 7h2.5V6A1.5 1.5 0 0 1 6 4.5zM8.5 5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5zM3 11.5A1.5 1.5 0 0 1 4.5 10h1A1.5 1.5 0 0 1 7 11.5v1A1.5 1.5 0 0 1 5.5 14h-1A1.5 1.5 0 0 1 3 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm4.5.5a1.5 1.5 0 0 1 1.5-1.5h1a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 9 12.5zm1.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
</svg>{{$t('ROAD MAP')}} </router-link></li> -->
<img class="" style="width: 80px;" src="https://static.vecteezy.com/system/resources/previews/022/721/714/non_2x/youtube-logo-for-popular-online-media-content-creation-website-and-application-free-png.png">
 
  </div>
</div>

            </li>
<li>

  <!-- <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" class="bi bi-youtube" viewBox="0 0 16 16">
  <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z"/>
</svg> -->
</li>
            <li class="nav-item">
              <div class="content">
      <!-- Изображение, которое открывает модальное окно -->
      <!-- <img
        @click="openModal"
        style="width: 20px; height: 20px; cursor: pointer"
        src="https://cdn3d.iconscout.com/3d/premium/thumb/translator-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--language-translate-translation-icon-pack-7-miscellaneous-illustrations-3918016.png?f=webp"
        alt="Language"
      /> -->
     <span style="color:cornflowerblue;font-family: 'Times New Roman', Times, serif;" class=""  @click="openModal"> {{ this.$i18n.locale }}</span>
    </div>

    <!-- Модальное окно -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content"  style="background-color:#091520;position: relative;">
        <!-- <div class="modal-header">
          
          <button type="button" class="close" @click="closeModal">&times;</button>
        </div> -->
        <div class="modal-body" style="background-color:#091520;color:white;">
          <div class="">
        <svg style="position: absolute;right: 10px;top:10px;cursor: pointer;" @click="closeModal" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
</svg>
        </div>
  <ul style="" class="list-group p-2">
    <li class="pointer" @click="changeLanguage('auto')">
      🌍 Auto <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6"/>
</svg>
    </li>
    <li class="pointer " @click="changeLanguage('en')">
      🇬🇧 English (English)
    </li>
    <li class="pointer " @click="changeLanguage('ru')">
      🇷🇺 Русский (Russian)
    </li>
    <li class="pointer " @click="changeLanguage('ar')">
      🇸🇦 العربية (Arabic)
    </li>
    <li class="pointer " @click="changeLanguage('zh-CN')">
      🇨🇳 中文 (Chinese)
    </li>
    <li class="pointer " @click="changeLanguage('de')">
      🇩🇪 Deutsch (German)
    </li>
    <li class="pointer " @click="changeLanguage('es')">
      🇪🇸 Español (Spanish)
    </li>
    <li class="pointer li" @click="changeLanguage('fr')">
      🇫🇷 Français (French)
    </li>
    <li class="pointer " @click="changeLanguage('hi')">
      🇮🇳 हिन्दी (Hindi)
    </li>
    <li class="pointer " @click="changeLanguage('it')">
      🇮🇹 Italiano (Italian)
    </li>
    <li class="pointer " @click="changeLanguage('ja')">
      🇯🇵 日本語 (Japanese)
    </li>
    <li class="pointer " @click="changeLanguage('ko')">
      🇰🇷 한국어 (Korean)
    </li>
    <li class="pointer " @click="changeLanguage('nl')">
      🇳🇱 Nederlands (Dutch)
    </li>
    <li class="pointer " @click="changeLanguage('pl')">
      🇵🇱 Polski (Polish)
    </li>
    <li class="pointer " @click="changeLanguage('pt')">
      🇵🇹 Português (Portuguese)
    </li>
    <li class="pointer " @click="changeLanguage('tr')">
      🇹🇷 Türkçe (Turkish)
    </li>
    <li class="pointer " @click="changeLanguage('uk')">
      🇺🇦 Українська (Ukrainian)
    </li>
  </ul>
</div>


     
      </div>
    </div>
            </li>
           
         
          </ul>
        </div>
      </div>
      <!-- <p class="text-white">Current Language: {{ $i18n.locale }}</p>
<p class="text-white">{{ $t('message.hello') }}</p> -->

   </nav>
  </div>
</template> 

<script>
// export default {
//   data() {
//     return {
//       showModal: false,
//       isDropdownOpen: false,
//       navbarOpen: false,
//       isDocumentationActive: false,
//       isScrolled: false,
//       isDesktop: window.innerWidth >= 992, 
//     };
//   },
//   mounted() {
//     const savedLanguage = localStorage.getItem("preferredLanguage");
//     if (savedLanguage) {
//       this.$i18n.locale = savedLanguage; // Установка сохранённого языка
//     } else {
//       this.detectLocationLanguage(); // Определение языка по локации
//     }
//     window.addEventListener("scroll", this.handleScroll);
//     window.addEventListener("resize", this.checkWindowSize); // Добавляем слушатель на изменение окна
//   },
//   beforeDestroy() {
//     window.removeEventListener("scroll", this.handleScroll);
//     window.removeEventListener("resize", this.checkWindowSize); // Убираем слушатель при уничтожении компонента
//   },

//   methods: {
//     async detectLocationLanguage() {
//       try {
//         const response = await fetch("https://ipapi.co/json/");
//         const data = await response.json();
//         const countryCode = data.country_code;
        
//         const languageMap = {
//           RU: "ru",
//           SA: "ar",
//           CN: "zh-CN",
//           DE: "de",
//           ES: "es",
//           FR: "fr",
//           IN: "hi",
//           IT: "it",
//           JP: "ja",
//           KR: "ko",
//           NL: "nl",
//           PL: "pl",
//           PT: "pt",
//           TR: "tr",
//           UA: "uk",
//           GB: "en",
//           US: "en",
//         };

//         const detectedLanguage = languageMap[countryCode] || "en";
//         this.$i18n.locale = detectedLanguage;
//         localStorage.setItem("preferredLanguage", detectedLanguage);
//       } catch (error) {
//         console.error("Ошибка при определении языка по IP:", error);
//         this.$i18n.locale = "en";
//         localStorage.setItem("preferredLanguage", "en");
//       }
//     },
//   //   changeLanguage(lang) {
//   //   console.log('Current language before change:', this.$i18n.locale); // Логирование текущего языка
//   //   this.$i18n.locale = lang; // Изменение языка на выбранный
//   //   console.log('Language changed to:', this.$i18n.locale); // Логирование изменения языка
//   //   this.closeModal(); // Закрытие модального окна
//   // },
//   async changeLanguage(lang) {
//       if (lang === 'auto') {
//         await this.detectLocationLanguage();
//       } else {
//         this.$i18n.locale = lang;
//         localStorage.setItem("preferredLanguage", lang);
//       }
//       this.closeModal();
//     },
//     checkWindowSize() {
//       this.isDesktop = window.innerWidth >= 992; // Обновляем флаг для мобильной/десктопной версии
//     },
//     openModal() {
//       this.showModal = true;
//     },
//     closeModal() {
//       this.showModal = false;
//     },
//     toggleDropdown() {
//       this.isDropdownOpen = !this.isDropdownOpen;
//     },
//     handleScroll() {
//       this.isScrolled = window.scrollY > 30;
//     },
//     isRouteActive(route) {
//       return this.$route.path === route;
//     },
//     toggleNavbar() {
//       this.navbarOpen = !this.navbarOpen;
//     },
//     closeNavbar() {
//       this.navbarOpen = false;
//     },
//   },
// };
export default {
  data() {
    return {
      showModal: false,
      isDropdownOpen: false,
      navbarOpen: false,
      isDocumentationActive: false,
      isScrolled: false,
      isDesktop: window.innerWidth >= 992,
    };
  },
  mounted() {
    // Проверяем, есть ли сохранённый язык в localStorage
    const savedLanguage = localStorage.getItem("preferredLanguage");

    if (savedLanguage) {
      // Если язык сохранён, используем его
      this.$i18n.locale = savedLanguage;
    } else {
      // Если языка нет в localStorage, запускаем автоматическое определение
      this.setLanguageBasedOnLocation();
    }

    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.checkWindowSize);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.checkWindowSize);
  },
  methods: {
    async setLanguageBasedOnLocation() {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();
        const countryCode = data.country_code;

        // Сопоставление страны и языка
        const languageMap = {
          RU: "ru",
          SA: "ar",
          CN: "zh-CN",
          DE: "de",
          ES: "es",
          FR: "fr",
          IN: "hi",
          IT: "it",
          JP: "ja",
          KR: "ko",
          NL: "nl",
          PL: "pl",
          PT: "pt",
          TR: "tr",
          UA: "uk",
          GB: "en",
          US: "en",
        };

        // Устанавливаем язык на основе локации или "en" по умолчанию
        const detectedLanguage = languageMap[countryCode] || "en";
        this.$i18n.locale = detectedLanguage;

        // Сохраняем выбранный язык в localStorage
        localStorage.setItem("preferredLanguage", detectedLanguage);
      } catch (error) {
        console.error("Ошибка при определении языка по IP:", error);
        // Если произошла ошибка, устанавливаем английский по умолчанию
        this.$i18n.locale = "en";
        localStorage.setItem("preferredLanguage", "en");
      }
    },
    changeLanguage(lang) {
      if (lang === "auto") {
        this.setLanguageBasedOnLocation();
      } else {
        this.$i18n.locale = lang;
        localStorage.setItem("preferredLanguage", lang);
      }
      this.closeModal();
    },
    checkWindowSize() {
      this.isDesktop = window.innerWidth >= 992;
    },
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleScroll() {
      this.isScrolled = window.scrollY > 30;
    },
    isRouteActive(route) {
      return this.$route.path === route;
    },
    toggleNavbar() {
      this.navbarOpen = !this.navbarOpen;
    },
    closeNavbar() {
      this.navbarOpen = false;
    },
  },
};

</script>

<style lang="scss" scoped>

@media (max-width: 991px) {
  .navbar-collapse {
    bottom: 0;
    top:6.5%;
    left: 0;
    right: 0;
    position: fixed;
    background-color: #091520; /* Непрозрачный фон для экранов меньше 500px */
  }
}
.modal-body .list-group li {
  margin: 5px;
}
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Полупрозрачный черный фон */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Высокий z-index, чтобы модал был поверх всего */
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 300px;
  max-height: 80%; /* Ограничение высоты модального окна */
  overflow: hidden; /* Обрезать содержимое, если оно превышает высоту */
  display: flex;
  flex-direction: column;
}

.modal-body {
  overflow-y: auto; /* Добавить прокрутку, если содержимое выходит за пределы */
  max-height: calc(80vh - 100px); /* Ограничить высоту контента модального окна */
}

.modal-header,
.modal-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.close {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.dropdown-menu {
   padding-left: 10px;
  display: none;
  position: absolute; /* Убедитесь, что меню позиционируется относительно родителя */
  top: 90%; /* Опустить меню вниз на высоту родителя */
  left: 0;
  
  z-index: 1000;
  margin-top: 0.5rem; /* Добавьте отступ для корректного визуального эффекта */
}

.dropdown-menu.show {
  display: block;
  min-width: 18rem;
}

.dropdown {
  position: relative; /* Родительский элемент должен быть "относительным", чтобы дропдаун позиционировался правильно */
}


.dropdown-menu.show {
  display: block;
}
.pointer {
  cursor: pointer;
}
.logo-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
}

.navbar-toggler {
  margin-right: 20px; /* Добавляем отступ справа для кнопки */
}
a{
  text-decoration: none;
  color: white;
}

.navbar-nav .active {
  color: #fff;
}

// .navbar-scrolled {
//   transition: color 0.3s ease;
//   background-color: rgba(12, 31, 34, 0.9); 
// }
.btn-danger1 {
  color: white;
  font-weight: bold;

  font-size: 9px;

  z-index: 100;
  padding: 7px 15px;
  border: 1px solid rgb(7, 122, 154);
  border-radius: 17px;
  background-color: #091520; /* Более тёмный оттенок с фиолетово-синим */
  background-size: 200% 200%;
  box-shadow: 0px 5px 10px rgba(77, 75, 75, 0.6),
    inset 0px -2px 8px rgba(255, 255, 255, 0.2);
  transform: perspective(500px) translateZ(30px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.btn-danger1:hover {
  background-color: #313a41;
  transform: perspective(500px) translateZ(20px);
  box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.8),
    inset 0px -3px 12px rgba(255, 255, 255, 0.2);
}

.btn-danger1:active {
  transform: perspective(500px) translateZ(5px);
  box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.4),
    inset 0px -1px 5px rgba(255, 255, 255, 0.1);
}

li {
  font-family: "Varela Round", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  // margin: 10px;
  cursor: pointer;
}
.modal {
  border: none !important;
}
.navbar {
  height: 60px;
  transition: color 0.3s ease;
  z-index: 10000000000000;
 
  transition: background-color 0.3s ease-in-out; // Плавный переход при изменении
  // padding: 10px 0;
}
.navbar-scrolled {
  background-color: rgba(12, 31, 34, 0.9); /* Цвет при прокрутке */
}

.navbar .navbar-toggler {
  
  background-color: rgba(
    255,
    255,
    255,
    0.1
  ); // Полупрозрачный белый цвет для кнопки
}

.navbar.fixed-top.scrolled {
  background-color: rgba(0, 0, 0, 0.9); // Затемнить навбар при скролле
}

.list-group-item {
  cursor: pointer;
}

.overlay-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1rem;
  font-weight: bold;
  color: white;
  z-index: 2;
  pointer-events: none; /* Чтобы не мешать кликам по ссылке */
}

.drop-menu li{
  font-size: 13px;
}
.dropdown-menu li{
  font-size: 13px;
  padding-right: 10px;
}
.navbar {
  transition: background-color 0.3s ease-in-out;
  
  /* По умолчанию делаем полупрозрачный фон для десктопной версии */
  background-color: rgba(10, 25, 38, 0.1);

  &.navbar-scrolled {
    background-color: rgba(9, 30, 41, 0.9) !important; /* Цвет при прокрутке */
  }

  /* Для мобильной версии устанавливаем непрозрачный фон */
  @media (max-width: 992px) {
    background-color: #091520 !important; /* Принудительно задаем непрозрачный фон */
  }
}

/* Дополнительные стили для кнопки на мобильных устройствах */
.navbar-toggler {
  color: white;
  border: 1px solid white; /* Стиль для кнопки тумблера */
}

.navbar-toggler-icon {
  filter: brightness(0) invert(1); /* Для белой иконки тумблера */
}
.nav-link{
  padding:  0 !important;
  // margin: 0 !important;
  
  }
 
.navbar-nav {
  display: flex;
  gap: 20px; /* Отступы между элементами */
}

.nav-item {
  
}

.nav-item:last-child {
  margin-right: 0; /* Убираем отступ у последнего элемента */
}

/* Мобильная версия (меньше 992px) */
@media (max-width: 992px) {
  .navbar-nav {
    flex-direction: column;
    gap: 5px; /* Уменьшаем отступы для мобильной версии */
    text-align: left; /* Располагаем меню слева */
    padding-left: 15px; /* Немного отступаем слева для удобства */
  }

  .navbar-toggler {
    margin-left: 15px; /* Сместим кнопку меню немного влево */
  }

  .nav-item {
    font-size: 18px;;
    gap:15px;
    margin-right: 0; /* Убираем правый отступ для мобильной версии */
    text-align: left; /* Выровняем элементы по левому краю в мобильной версии */
  }

  /* Дополнительное стилевое оформление для тега ul */
  .navbar-collapse {
    text-align: left; /* Убедимся, что элементы меню выровнены влево */
  }
}

.modal-body .list-group {
  list-style: none; /* Убираем маркеры списка */
  padding: 0; /* Убираем отступы списка */
}

.modal-body .list-group li {
  padding: 10px 20px; /* Добавляем отступы для элементов */
  margin: 5px 0; /* Добавляем отступы между элементами */
  font-size: 16px; /* Размер шрифта */
  background-color: transparent; /* Фон по умолчанию */
  transition: background-color 0.3s ease, color 0.3s ease; /* Плавный переход */
  border-radius: 8px; /* Скругленные углы */
  cursor: pointer; /* Указываем, что элемент кликабельный */
}

.modal-body .list-group li:hover {
  background-color: rgba(255, 255, 255, 0.1); /* Цвет фона при наведении */
  color: #00bcd4; /* Изменение цвета текста при наведении */
}

.modal-body .list-group li:active {
  background-color: rgba(255, 255, 255, 0.2); /* Цвет фона при клике */
  color: #008c9e; /* Изменение цвета текста при клике */
}

</style>

