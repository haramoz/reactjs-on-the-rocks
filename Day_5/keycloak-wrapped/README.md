# Plan

In this keycloak wrapped app we are gonna implement some RBAC stuffs for the react JS app.

docker run -p 8089:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:21.0.2 start-dev

nextlab - new realm is created

http://localhost:8089/auth -> where the ui is accessible 
username : admin
password: admin

- Write an equivalent docker-compose file and init config using exported json

- https://www.keycloak.org/docs/latest/server_admin/#client-scopes

Important:
Configure SSl in keycloak
Themes https://www.keycloak.org/docs/latest/server_development/#_themes.

Users:
admin1/admin1
user1/user1
guest1/guest1