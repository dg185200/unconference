package com.ncr.unconference;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("/version")
public class VersionController {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public String getVersion() {
        String version = System.getenv("GAE_VERSION");
        if (version == null) {
            version = "development";
        }
        return "v" + version;
    }
}
