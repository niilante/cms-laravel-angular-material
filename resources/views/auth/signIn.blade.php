<form name="signInForm" ng-submit="vm.signInUser()" layout="column" layout-padding layout-fill>
    <div flex>
        <h1 class="md-display-1 center-align">Sign in</h1>
    </div>
    <md-input-container flex>
        <label>E-mail</label>
        <input ng-model="vm.user.email" name="email" type="email" required>
        <div ng-messages="signInForm.email.$error">
            <div ng-message="required">This field is required</div>
            <div ng-message="email">This field should be an email</div>
        </div>
    </md-input-container>

    <md-input-container flex>
        <label>Password</label>
        <input ng-model="vm.user.password" type="password" name="password" id="password" required>
        <div ng-messages="signInForm.password.$error">
            <div ng-message="required">This field is required</div>
        </div>
    </md-input-container>

    <md-checkbox ng-model="vm.user.remember" name="remember" class="md-primary" aria-label="Remember">
        Remember me
    </md-checkbox>
    <div flex ng-show="vm.submitting">
        <md-progress-linear md-mode="indeterminate"></md-progress-linear>
    </div>
    <div layout="row">
        <md-button class="md-raised md-primary" flex>Sign in</md-button>
        <md-button class="md-primary" flex href="{{url('/auth/register')}}">Register</md-button>
    </div>
</form>