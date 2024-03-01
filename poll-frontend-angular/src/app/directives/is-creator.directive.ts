import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Poll } from '../models/poll.model';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[appIsCreator]'
})
export class IsCreatorDirective {

  private subscription?: Subscription;

  @Input('appIsCreator') poll?: Poll;

  constructor(
    private templateRef: TemplateRef<any>,
    private authenticationService: AuthenticationService,
    private viewContainerRef: ViewContainerRef
  ) { }

  ngOnChanges(){

    this.subscription?.unsubscribe();
    this.subscription = this.authenticationService.connectedUser.subscribe(
      user=>{
        if(user !== undefined && user?.id === this.poll?.creator.id){
          this.viewContainerRef.createEmbeddedView(this.templateRef)
        }
        else {
          this.viewContainerRef.clear();
        }
      }
    );
  }

}
