package com.xifeng.kuandai.mapper;

import com.xifeng.kuandai.dto.Information;

import java.util.List;

public interface InformationMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Information record);

    int insertSelective(Information record);

    Information selectByPrimaryKey(Integer id);

    List<Information> queryInformation(Information information);

    int updateByPrimaryKeySelective(Information record);

    int updateByPrimaryKey(Information record);
}