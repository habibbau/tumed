import { Component, AfterViewInit, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { LoginService } from 'app/core/login/login.service';
import { AccountService } from 'app/core/auth/account.service';

import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'jhi-navigation',
  templateUrl: './navigation.component.html',
})
export class JhiNavigationComponent implements AfterViewInit, OnInit {
  name: string | any;
  account: any;
  public config: PerfectScrollbarConfigInterface = {};

  // This is for Notifications
  notifications: Object[] | any = [
    {
      round: 'round-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM',
    },
    {
      round: 'round-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM',
    },
    {
      round: 'round-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM',
    },
    {
      round: 'round-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM',
    },
  ];

  // This is for Mymessages
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.jpg',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM',
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM',
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM',
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM',
    },
  ];

  constructor(
    private modalService: NgbModal,
    private loginService: LoginService,
    private router: Router,
    private accountService: AccountService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    // Sisteme login olan kullanıcının bilgilerini almak icin kullanılır
    // this.accountService.identity().then(account => {
    //   this.account = account;
    // });
  }

  ngAfterViewInit() {
    const set = function () {
      // const width = window.innerWidth > 0 ? window.innerWidth : this.screen.width;
      // const topOffset = 0;
      // if (width < 1170) {
      //   $('#main-wrapper').addClass('mini-sidebar');
      // } else {
      //   $('#main-wrapper').removeClass('mini-sidebar');
      // }
    };
    $(window).ready(set);
    $(window).on('resize', set);

    $('.search-box a, .search-box .app-search .srh-btn').on('click', function () {
      $('.app-search').toggle(200);
    });

    $('body').trigger('resize');
  }

  // Logout modalını acacak olan fonksiyon
  // logoutModal(contentLogout) {
  //   this.modalService.open(contentLogout, { centered: true, windowClass: 'animated flipInY' });
  // }

  // Logout olurken calısacak olan fonksiyon
  success: any;
  settingsForm: any;
  logout() {
    // this.loginService.logout();
    this.modalService.dismissAll();
    this.router.navigate(['']);
  }

  save() {}
}
