package com.project.toyple.language;

import lombok.*;

import javax.persistence.*;
@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
@Table(name = "language")
public class LanguageDto {
    @Id
    @Column(name="seq")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;
//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "projectDto_id")
//    private ProjectDto project_id;
    @Column
    private String language;

}
