import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta',
  templateUrl: 'cta.component.html',
  styleUrls: ['cta.component.css'],
})
export class CTA {
  @Input()
  heading1: string = 'Ready to Transform Your Vision into Precise Plans?'
  @Input()
  content1: string =
    'Partner with experienced CADD professionals who deliver accurate, detailed drawings and innovative 3D solutions. Let\'s discuss how we can bring clarity and precision to your next project.'
  @Input()
  action1: string = 'Get a Free Consultation'
  constructor() {}
}
