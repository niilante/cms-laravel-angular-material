<form name="registerForm" ng-submit="vm.registerUser()" layout="column" layout-padding layout-fill>
    <div flex>
        <h1 class="md-display-1 center-align">Create Account</h1>
    </div>
    <md-input-container flex>
        <label>Name</label>
        <input ng-model="vm.user.name" name="name" type="text" required>
        <div ng-messages="registerForm.name.$error">
            <div ng-message="required">This field is required</div>
        </div>
    </md-input-container>

    <md-input-container flex>
        <label>E-mail</label>
        <input ng-model="vm.user.email" name="email" type="email" required>
        <div ng-messages="registerForm.email.$error">
            <div ng-message="required">This field is required</div>
            <div ng-message="email">This field should be an email</div>
        </div>
    </md-input-container>

    <md-input-container flex>
        <label>Password</label>
        <input ng-model="vm.user.password" type="password" name="password" id="password" minlength="6" required>
        <div ng-messages="registerForm.password.$error">
            <div ng-message="required">This field is required</div>
            <div ng-message="minlength">The field must be at least 6 characters.</div>
        </div>
    </md-input-container>

    <md-input-container flex>
        <label>Confirm Password</label>
        <input ng-model="vm.user.password_confirmation" type="password" name="password_confirmation" minlength="6" id="password_confirmation" required>
        <div ng-messages="registerForm.password_confirmation.$error">
            <div ng-message="required">This field is required</div>
            <div ng-message="minlength">The field must be at least 6 characters.</div>
        </div>
    </md-input-container>

    <div flex>
        <md-progress-linear md-mode="indeterminate" ng-show="vm.submitting"></md-progress-linear>
    </div>
    <div layout="row">
        <md-button class="md-raised md-primary" flex>Register</md-button>
        <md-button class="md-primary" flex href="{{url('/auth/sign-in')}}">Login</md-button>
    </div>
</form>