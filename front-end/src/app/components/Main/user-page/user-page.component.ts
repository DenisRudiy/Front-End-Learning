import { Component, EventEmitter, Output } from '@angular/core'

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})
export class UserPageComponent {
  @Output() showPageEvent = new EventEmitter<any>()
  showRegPage() {
    this.showPageEvent.emit()
  }
}
