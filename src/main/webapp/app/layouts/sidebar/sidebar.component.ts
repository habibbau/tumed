import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ROUTES } from './menu-items';
import { RouteInfo } from './sidebar.metadata';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from 'app/core/login/login.service';
@Component({
  selector: 'jhi-sidebar',
  templateUrl: './sidebar.component.html',
})
export class JhiSidebarComponent implements OnInit {
  showMenu = '';
  showSubMenu = '';
  // public sidebarnavItems: any[];

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }
  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
  }

  constructor(private modalService: NgbModal, private router: Router, private route: ActivatedRoute, private loginService: LoginService) {}
  // End open close
  ngOnInit() {
    // this.sidebarnavItems = ROUTES.filter(sidebarnavItem => sidebarnavItem);
    $(function () {
      $('.sidebartoggler').on('click', function () {
        if ($('#main-wrapper').hasClass('mini-sidebar')) {
          $('body').trigger('resize');
          $('#main-wrapper').removeClass('mini-sidebar');
        } else {
          $('body').trigger('resize');
          $('#main-wrapper').addClass('mini-sidebar');
        }
      });
    });
  }
  // Logout modalını acacak olan fonksiyon
  // logoutModal(contentLogout) {
  //   this.modalService.open(contentLogout, { centered: true, windowClass: 'animated flipInY' });
  // }
  // Logout olurken calısacak olan fonksiyon
  logout() {
    this.loginService.logout();
    this.modalService.dismissAll();
    this.router.navigate(['']);
  }
}
