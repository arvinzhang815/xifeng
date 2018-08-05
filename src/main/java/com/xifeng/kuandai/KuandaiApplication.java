package com.xifeng.kuandai;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.xifeng.kuandai.mapper")
public class KuandaiApplication {

    public static void main(String[] args) {
        SpringApplication.run(KuandaiApplication.class, args);
    }
}
