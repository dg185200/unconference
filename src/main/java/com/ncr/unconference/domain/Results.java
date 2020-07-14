package com.ncr.unconference.domain;

import java.util.HashMap;
import java.util.Map;

public class Results {
    
    public long[] getRaw() {
        return new long[] {
            Vote.count("language", "c"),
            Vote.count("language", "c++"),
            Vote.count("language", "c#"),
            Vote.count("language", "go"),
            Vote.count("language", "java"),
            Vote.count("language", "javascript"),
            Vote.count("language", "kotlin"),
            Vote.count("language", "python"),
            Vote.count("language", "ruby"),
            Vote.count("language", "swift"),
        };
    }
}
