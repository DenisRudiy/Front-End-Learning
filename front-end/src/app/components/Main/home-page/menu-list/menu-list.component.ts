import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  lang: string = 'eng'

  ngOnInit(): void {
    const storedLang = localStorage.getItem('language')
    if (storedLang == 'ukr') {
      this.lang = storedLang
    }
  }
}
