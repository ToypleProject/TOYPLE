package com.project.toyple.job;

import com.project.toyple.project.ProjectDto;
import lombok.*;

import javax.persistence.*;

@AllArgsConstructor
@RequiredArgsConstructor
@Getter
@Setter
@Builder
@Entity
//@Table(name="job")
public class JobDto {

    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int seq;

    @ManyToOne(cascade = CascadeType.PERSIST)
    @JoinColumn(name = "id")
//    @JoinColumn
    private ProjectDto projectDto;
    private String job;


}

//@Getter
//@Setter
//@Entity
//@DiscriminatorValue("job")
//public class JobDto extends ProjectDto {
//    private String job;
//
//}