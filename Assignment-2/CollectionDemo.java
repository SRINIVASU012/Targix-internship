import java.util.*;

public class CollectionDemo {

    public static void main(String[] args) {

        // -------- LIST OPERATIONS --------
        List<Student> studentList = new ArrayList<>();

        // Add elements
        studentList.add(new Student(1,"Rahul"));
        studentList.add(new Student(2,"Arjun"));
        studentList.add(new Student(3,"Kiran"));

        System.out.println("Student List:");
        studentList.forEach(System.out::println);

        // Access element
        System.out.println("\nAccessing element at index 1:");
        System.out.println(studentList.get(1));

        // Update element
        studentList.set(1, new Student(2,"Vikram"));
        System.out.println("\nAfter Updating:");
        studentList.forEach(System.out::println);

        // Search element
        System.out.println("\nSearching for student with name Kiran:");
        for(Student s : studentList){
            if(s.name.equals("Kiran")){
                System.out.println("Student Found: " + s);
            }
        }

        // Remove element
        studentList.remove(0);

        System.out.println("\nAfter Removing first student:");
        studentList.forEach(System.out::println);



        // -------- SET OPERATIONS --------
        Set<String> courseSet = new HashSet<>();

        // Add
        courseSet.add("Java");
        courseSet.add("Python");
        courseSet.add("C++");
        courseSet.add("Java"); // duplicate

        System.out.println("\nCourse Set:");
        System.out.println(courseSet);

        // Search
        if(courseSet.contains("Python")){
            System.out.println("Python course is available");
        }

        // Remove
        courseSet.remove("C++");

        System.out.println("After removing C++:");
        System.out.println(courseSet);



        // -------- MAP OPERATIONS --------
        Map<Integer,String> studentMap = new HashMap<>();

        // Add
        studentMap.put(1,"Rahul");
        studentMap.put(2,"Arjun");
        studentMap.put(3,"Kiran");

        System.out.println("\nStudent Map:");
        System.out.println(studentMap);

        // Access value
        System.out.println("\nAccess student with ID 2:");
        System.out.println(studentMap.get(2));

        // Search
        if(studentMap.containsKey(3)){
            System.out.println("Student Found: " + studentMap.get(3));
        }

        // Update value
        studentMap.put(2,"Vikram");

        System.out.println("\nAfter Updating:");
        System.out.println(studentMap);

        // Remove
        studentMap.remove(1);

        System.out.println("\nAfter Removal:");
        System.out.println(studentMap);

        // Iterate Map
        System.out.println("\nIterating Map:");
        for(Map.Entry<Integer,String> entry : studentMap.entrySet()){
            System.out.println(entry.getKey()+" -> "+entry.getValue());
        }

    }
}
