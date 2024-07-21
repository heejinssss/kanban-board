package com.poscodx.kanbanboard.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.poscodx.kanbanboard.vo.CardVo;
import com.poscodx.kanbanboard.vo.TaskVo;

@Repository
public class TaskRepository {

    @Autowired
    private SqlSession sqlSession;

    public List<TaskVo> findAllTasks(Long cardNo) {
        return sqlSession.selectList("task.findAllTasks", cardNo);
    }

    public int addTask(TaskVo taskVo) {
        return sqlSession.insert("task.addTask", taskVo);
    }

    public void updateTask(Long no, String done) {
        sqlSession.update("task.updateTask", Map.of("no", no, "done", done));
    }

    public int deleteTask(Long no) {
        return sqlSession.delete("task.deleteTask", no);
    }
}
