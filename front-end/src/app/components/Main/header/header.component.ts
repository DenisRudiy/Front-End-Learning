import { Component, OnInit } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  sidebarVisible: boolean = false
  dialogVisible: boolean = false
  regVisible: boolean = false
  logVisible: boolean = false
  editVisible: boolean = false

  changeVisible() {
    this.sidebarVisible = false
  }

  showReg() {
    this.regVisible = !this.regVisible
  }

  showLog() {
    this.logVisible = !this.logVisible
  }

  showEdit() {
    this.editVisible = !this.editVisible
  }

  ngOnInit(): void {
    const sidebar = document.getElementById('p-sidebar')!
  }
}
