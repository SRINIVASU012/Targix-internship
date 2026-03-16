import java.util.*;

public class CollectionTest {

    public static void main(String[] args) {
        testListAdd();
        testSetUnique();
        testMapSearch();
        System.out.println("All tests passed!");
    }

    static void testListAdd() {
        List<String> list = new ArrayList<>();
        list.add("Java");

        if (list.size() != 1) {
            System.out.println("testListAdd failed");
        }
    }

    static void testSetUnique() {
        Set<String> set = new HashSet<>();
        set.add("Java");
        set.add("Java");

        if (set.size() != 1) {
            System.out.println("testSetUnique failed");
        }
    }

    static void testMapSearch() {
        Map<Integer, String> map = new HashMap<>();
        map.put(1, "Rahul");

        if (!map.containsKey(1)) {
            System.out.println("testMapSearch failed");
        }
    }
}
