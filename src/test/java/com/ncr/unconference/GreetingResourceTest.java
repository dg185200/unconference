package com.ncr.unconference;

import io.quarkus.test.junit.QuarkusTest;
import org.junit.jupiter.api.Test;

import static io.restassured.RestAssured.given;
import static org.hamcrest.CoreMatchers.is;

@QuarkusTest
class GreetingResourceTest {

    @Test
    void testHelloEndpoint() {
        given()
                .when()
                .get("/greet?name=sai")
                .then()
                .statusCode(200)
                .body(is("<h1>hello, sai</h1>\n"));
    }
}