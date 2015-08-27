<md-card>
    <md-card-content class="pd-b-40">
        <h2 class="md-title">Welcome, {{Auth::user()->name}}!</h2>
    </md-card-content>
</md-card>

<md-card>
    <md-card-content class="pd-b-40">
        <h2 class="md-title">Registered Users</h2>
        <table class="bordered responsive-table">
            <thead>
            <tr>
                <th data-field="id">ID</th>
                <th data-field="name">Name</th>
                <th data-field="email">E-mail</th>
                <th data-field="role" class="center-align">Role</th>
                <th data-field="status" class="center-align">Status</th>
            </tr>
            </thead>

            <tbody>
            @foreach(App\User::all() as $u)
            <tr>
                <td>{{$u->id}}</td>
                <td>{{$u->name}}</td>
                <td>{{$u->email}}</td>
                <td class="center-align">{{$u->isAdmin ? "Admin" : "User"}}</td>
                <td class="center-align"><span class="status {{$u->active ? "active" : "inactive"}}"></span></td>
            </tr>
            @endforeach
            </tbody>
        </table>
        <div class="user-legend">
            <p><span class="status active"></span> <small>= Active</small></p>
            <p><span class="status inactive"></span> <small>= Inactive</small></p>
        </div>
    </md-card-content>
</md-card>
<div layout-sm="column" layout-gt-sm="row">
    <md-card flex>
        <md-card-content class="pd-b-40">
            <h2 class="md-title">Latest Photos</h2>
            <md-grid-list
                    md-cols-sm="2" md-cols-md="2" md-cols-lg="3" md-cols-gt-lg="4"
                    md-row-height-gt-md="1:1" md-row-height="2:2"
                    md-gutter="12px" md-gutter-gt-sm="8px" >
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
                <md-grid-tile class="gray">
                    <img class="img-responsive" src="http://placehold.it/300x300">
                </md-grid-tile>
            </md-grid-list>
        </md-card-content>
    </md-card>

    <md-card flex>
        <md-card-content class="pd-b-40">
            <h2 class="md-title">Incoming events</h2>
        </md-card-content>
    </md-card>
</div>