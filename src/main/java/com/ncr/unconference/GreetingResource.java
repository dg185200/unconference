package com.ncr.unconference;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.MediaType;

@Path("")
public class GreetingResource {

    private static final String MESSAGE = "<h1>hello, %s</h1>\n";

    @GET @Path("/greet")
    @Produces(MediaType.TEXT_HTML)
    public String hello(@QueryParam("name") final String name) {
        return String.format(MESSAGE, name);
    }
}