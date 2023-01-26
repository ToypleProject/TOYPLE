package com.project.toyple.language;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;
@AllArgsConstructor
<<<<<<< HEAD
@Data
@Builder
@Entity
@Table(name="language")
=======
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "language")
>>>>>>> 419513a677250d271a51764ad06f42d46121eac0
public class LanguageDto {
    @Id
    @Column(name="seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "project_id")
    private ProjectDto project_id;
    @Column
    private String language;

}
