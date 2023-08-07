package com.demo.survey.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class SurveyController {
    @GetMapping("/api/hello")
    public String test() {

        return "hello";
    }

}
