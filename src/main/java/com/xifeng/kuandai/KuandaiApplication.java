package com.xifeng.kuandai;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
@MapperScan("com.xifeng.kuandai.mapper")
public class KuandaiApplication extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(KuandaiApplication.class, args);
    }

    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder applicationBuilder){
        return applicationBuilder.sources(KuandaiApplication.class);
    }
}
