import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="navbar navbar-inverse navbar-fixed-top">
  <div class="container">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand"  [routerLink] = "['/']">Departamento de Sismologia</a>
    </div>
    <div class="navbar-collapse collapse">
      <ul class="nav navbar-nav">
        <li class="dropdown">
          <a class="dropdown-toggle" data-toggle="dropdown">Sismos
            <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a  [routerLink] ="['buscar']">Buscar</a></li>
            <li><a  [routerLink] ="['/editar',0]">Crear</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</div>
<div class="container body-content" style="margin-top: 100px;">
  <router-outlet></router-outlet>

  <hr/>
  <footer>
    <p>© 2020- Fullstack Challenge - Jose Leal.</p>
  </footer>
</div>
`
})
export class AppComponent {

  title = 'SismosViewer';
}
