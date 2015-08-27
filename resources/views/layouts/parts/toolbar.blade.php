<md-toolbar class="md-whiteframe-z2 toolbar">
    <div class="md-toolbar-tools">
        <md-button class="md-icon-button" hide-gt-md ng-click="vm.sideNavToggle('{{config('sidenav.id')}}')" aria-label="Menu">
            <md-icon aria-label="menu" style="color: {{config('sidenav.toggle_btn.i_color')}}">{{config('sidenav.toggle_btn.icon')}}</md-icon>
        </md-button>
        <h1 class="md-headline" data-ng-bind="title"></h1>
    </div>
</md-toolbar>