<!doctype html>
<html lang="en" data-ng-app="auth" ng-strict-di>
<head>
    <base href="/">
    <meta charset="UTF-8">
    <meta http-equiv="x-ua-compatible" content="E=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"/>
    <meta name="_token" content="{{csrf_token()}}">
    <title data-ng-bind="title"></title>
    <link rel="icon" type="image/png" href="{{asset('/favicon.png')}}">
    <link href='https://fonts.googleapis.com/css?family=Lato:700,400' rel='stylesheet' type='text/css'>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

    {!! Assets::css() !!}
</head>
<body ng-controller="Auth as vm" layout="row" layout-align="center center" class="auth">
<main layout="column" flex flex-md="65" flex-lg="45" flex-gt-lg="35">
    <md-content data-ng-view flex>
    </md-content>
</main>
{!! Assets::js() !!}
</body>
</html>