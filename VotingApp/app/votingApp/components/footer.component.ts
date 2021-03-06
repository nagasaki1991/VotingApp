﻿import {Component} from "@angular/core";


@Component({
    selector: "my-footer",
    template: ` <footer  class="page-footer teal" id="footer">
                      <div class="container">
                        <div class="row center-align">
                          <a href="https://github.com/nagasaki1991/VotingApp" target="_blank" class="footerIcon">
                               <i class="fa fa-github fa-2x" aria-hidden="true"></i>
                           </a>
                               <br>
                           <span>© 2017 Copyright.</span>
                        </div>
                      </div>
                </footer>`,
    styleUrls: ['../content/styles/footer.comp.css'],
})

export class FooterComponent {

}