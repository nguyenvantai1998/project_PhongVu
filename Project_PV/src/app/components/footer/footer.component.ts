import { Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.showScrollTop();
    }, 2900);
  }

  showScrollTop() {
    $('#scrollTop').click(function () {
      $('html,body').animate({ scrollTop: 0 }, 1500);
    });
    $(window).bind('scroll', function () {
      var pos = window.scrollY;
      if (pos > 300) {
        $('#scrollTop').show();
      } else {
        $('#scrollTop').hide();
      }
    });
  }

}
