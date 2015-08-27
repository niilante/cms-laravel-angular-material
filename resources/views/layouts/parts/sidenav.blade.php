<md-sidenav class="md-sidenav-left md-whiteframe-z2" md-theme="sideNav" md-component-id="{{config('sidenav.id')}}" md-is-locked-open="$mdMedia('gt-md')">
    <header class="nav-header">
        <img class="logo" src="{{asset(config('sidenav.logo'))}}"/>
    </header>
    <md-content flex role="navigation">
        <div layout="row" md-theme="default" layout-padding layout-align="center center">
            @foreach(config('sidenav.user_options') as $item => $o)
                <md-button class="md-icon-button transparent"  ng-href="{{$o['url']}}" aria-label="{{$item}}">
                    <md-tooltip>
                        {{$item}}
                    </md-tooltip>
                    <md-icon aria-label="{%o.icon%}" style="color: {{$o['i_color']}}">{{$o['icon']}}</md-icon>
                </md-button>
            @endforeach
        </div>
        <md-divider></md-divider>
        @foreach(config('sidenav.navigation') as $header => $options)
            <md-list>
                <md-subheader class="md-no-sticky">{{$header}}</md-subheader>
                @foreach($options as $o => $url)
                    <md-list-item ng-click="vm.navigate('{{$url}}','{{config('sidenav.id')}}')"><p>{{$o}}</p></md-list-item>
                @endforeach
                <md-divider ng-if="!$last"></md-divider>
            </md-list>
        @endforeach
    </md-content>
</md-sidenav>