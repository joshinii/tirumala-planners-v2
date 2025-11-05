import { AfterViewInit, Component, Input } from '@angular/core'

@Component({
  selector: 'app-steps',
  templateUrl: 'steps.component.html',
  styleUrls: ['steps.component.css'],
})
export class Steps implements AfterViewInit {
  ngAfterViewInit(): void {
    const video = document.querySelector('.background-video') as HTMLVideoElement;
    if (video) {
      video.onloadeddata = () => {
        console.log('Video loaded successfully!');
      };
    }
  }
  @Input()
  step1Title: string = 'Initial Consultation'
  @Input()
  step1Description: string =
    'Connect with our team to discuss your project requirements, objectives, and vision. We analyze your needs to develop the optimal CADD solution for your specific project.'

  @Input()
  step2Title: string = 'Detailed Proposal'
  @Input()
  step2Description: string =
    'Receive a comprehensive proposal with clear project scope, deliverables, timeline, and transparent pricing tailored to your requirements.'

  @Input()
  step3Title: string = 'Design & Development'
  @Input()
  step3Description: string =
    'Our experienced CADD professionals create precise technical drawings and 3D models, incorporating your feedback at every milestone to ensure accuracy.'

  @Input()
  step4Title: string = 'Final Delivery'
  @Input()
  step4Description: string =
    'Review completed designs, request revisions if needed, and receive all project files in your preferred format with full documentation and support.'
  constructor() { }
}
