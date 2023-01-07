package com.project.toyple.language;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@RequiredArgsConstructor
@Data
@Builder
@Entity
@Table
public class LanguageDto {
    @Id
    @Column(name="seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    @Column
    private String language;

}
